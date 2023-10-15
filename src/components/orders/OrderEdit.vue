<script setup lang='ts'>
import { onMounted, reactive, computed } from 'vue';
import { Store } from 'pinia';
import Field from '../basic/Field.vue'
import FieldSelect from '../basic/FieldSelect.vue';
import * as positionsApi from '../../utils/positionsApi';
import { useOrdersStore, OrdersState, OrdersActions } from '../../stores/ordersStore';
import { IOption } from '../basic/IOption';
import { IOrderRequest } from './IOrder';
import Button from '../basic/Button.vue';
import ProductSelectOverlay from '../products/ProductSelectOverlay.vue';
import OrderProductItem from './OrderProductItem.vue';

interface Props {
  orderId?: string,
}

interface State {
  order: IOrderRequest,
  position?: IOption,
  positions: IOption[],
  showModal: boolean,
}

const ordersStore: Store<'orders', OrdersState, {}, OrdersActions> = useOrdersStore()

const props = defineProps<Props>()

const state: State = reactive({
  order: {
    id: props.orderId,
    positionId: '',
    status: 'open',
  },
  positions: [],
  showModal: false,
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
});

const hasProducts = computed(() => state.order.items && state.order.items?.length > 0)
const toggleModal = () => state.showModal = !state.showModal
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
        <Button
          label="Fechar pedido"
          theme="primary"
          full></Button>
      </div>
    </div>
  </section>
  <ProductSelectOverlay
    v-if="state.showModal"
    :order-id="props.orderId"
    @close="toggleModal" />
</template>