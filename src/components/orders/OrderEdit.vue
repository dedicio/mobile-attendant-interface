<script setup lang='ts'>
import { onMounted, reactive, computed } from 'vue';
import { Store } from 'pinia';
import { router } from '../../routes';
import Field from '../basic/Field.vue'
import FieldSelect from '../basic/FieldSelect.vue';
import * as positionsApi from '../../utils/positionsApi';
import { useOrdersStore, OrdersState, OrdersActions } from '../../stores/ordersStore';
import { IOption } from '../basic/IOption';
import { IOrder } from './IOrder';
import Button from '../basic/Button.vue';
import ProductSelectOverlay from '../products/ProductSelectOverlay.vue';
import OrderProductItem from './OrderProductItem.vue';

interface Props {
  orderId?: string,
}

interface State {
  order: IOrder,
  position?: IOption,
  positions: IOption[],
  showModal: boolean,
  paymentMethods: IOption[],
}

const paymentMethods = [
  { id: 'money', label: 'Dinheiro' },
  { id: 'credit_card', label: 'Cartão de crédito' },
  { id: 'debit_card', label: 'Cartão de débito' },
  { id: 'pix', label: 'Pix' },
]

const ordersStore: Store<'orders', OrdersState, {}, OrdersActions> = useOrdersStore()

const props = defineProps<Props>()

const state: State = reactive({
  order: {
    id: props.orderId || '',
    positionId: '',
    status: 'open',
  },
  positions: [],
  showModal: false,
  paymentMethods,
})

onMounted(async () => {
  if (props.orderId) {
    state.order = {
      ...state.order,
      ...ordersStore.getOrderById(props.orderId),
    }

    const { id, name } = await positionsApi.getPositionById(state.order.positionId);
    state.position = {
      id: id,
      label: name,
    }
  }

  if (!state.order.positionId) {
    let options: IOption[] = [];
    const response = await positionsApi.getPositions();

    if (response?.length > 0) {
      options = response.map(position => ({
        id: position.id,
        label: position.name,
      }));
    }

    state.positions = options;
  }

  if (!state.order.id) {
    state.order.id = ordersStore.getNewOrderId();
    ordersStore.addOrder(state.order);
  }
});

const hasProducts = computed(() => state.order.items && state.order.items?.length > 0)
const toggleModal = () => state.showModal = !state.showModal

const finishOrder = async () => {
  await ordersStore.closeOrder(state.order);  
  router.push({ path: '/positions' });
}
</script>

<template>
  <section>
    <div class="mb-4">
      <div v-if="state.position?.id">
        <strong>{{ state.position.label }}</strong>
      </div>
      <FieldSelect
        v-else
        v-model="state.order.positionId"
        :options="state.positions"
        label="Selecione a mesa" />
    </div>

    <div v-if="state.order.positionId">
      <div  v-if="hasProducts">
        <OrderProductItem
          v-for="product in state.order.items"
          :key="product.id"
          :item="product" />
      </div>

      <Button
        label="Adicionar produtos"
        full
        @click="toggleModal">
      </Button>

      <div
        v-if="hasProducts"
        class="py-2">
        <div>
          <FieldSelect
            v-model="state.order.paymentMethod"
            :options="state.paymentMethods"
            label="Selecione o método de pagamento" />
        </div>

        <Button
          label="Fechar pedido"
          theme="primary"
          full
          @click="finishOrder"></Button>
      </div>
    </div>
  </section>
  <ProductSelectOverlay
    v-if="state.showModal"
    :order-id="state.order.id"
    @close="toggleModal"
    @save="toggleModal" />
</template>