<script setup lang='ts'>
import { reactive, onMounted, computed, ref } from 'vue';
import { Store } from 'pinia'
import { IGroup } from './IGroup';
import { IPosition, PositionWithOrder } from './IPosition';
import * as positionsApi from '../../utils/positionsApi';
import * as groupsApi from '../../utils/groupsApi';
import { useOrdersStore, OrdersState, OrdersActions } from '../../stores/ordersStore';
import Loading from '../basic/Loading.vue';
import PositionsListItem from './PositionsListItem.vue'

const positions: PositionWithOrder[] = reactive([]);
const groups: IGroup[] = reactive([]);
const ordersStore: Store<'orders', OrdersState, {}, OrdersActions> = useOrdersStore()

onMounted(async () => {
  isLoading.value = true;
  let receivedPositions: IPosition[]
  const receivedGroups: IGroup[] = await groupsApi.getGroups();

  if (receivedGroups?.length > 0) {
    receivedPositions = await groupsApi.getPositionsByGroupId(receivedGroups[0].id);
  } else {
    receivedPositions = await positionsApi.getPositions();
  }

  const storedOrders = ordersStore.orders
  const feededPositions: PositionWithOrder[]  = receivedPositions.map(position => {
    let positionOrders: PositionWithOrder = {
      id: position.id,
      name: position.name,
      description: position.description,
      groupId: position.groupId,
    }

    const storedOrder = storedOrders.find(order => order.positionId === position.id)
    if (storedOrder) {
      positionOrders.order = {
        orderId: storedOrder.id,
        status: storedOrder.status,
      }
    }

    return positionOrders
  })
  groups.push(...receivedGroups);
  positions.push(...feededPositions);
  isLoading.value = false;
});

const isLoading = ref(false);
const hasPositions = computed(() => positions.length > 0);
</script>

<template>
  <div v-if="isLoading" class="flex justify-center items-center h-full">
    <Loading></Loading>
  </div>
  <template v-else>
    <section
      v-if="hasPositions"
      class="grid grid-cols-3 gap-2">
      <PositionsListItem
        v-for="position in positions"
        :key="position.id"
        :position="position" />
    </section>
    <section v-else>
      Nenhuma mesa encontrada
    </section>
  </template>
</template>
