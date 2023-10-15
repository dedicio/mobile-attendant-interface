<script setup lang='ts'>
import { computed } from 'vue'
import { PositionWithOrder } from './IPosition';
import PositionsListItemNew from './PositionsListItemNew.vue';
import PositionsListItemOpen from './PositionsListItemOpen.vue';
import { router } from '../../routes';

interface Props {
  position: PositionWithOrder
}

const props = defineProps<Props>()
const isOpen = computed(() => props.position.order?.status === 'open')

const editOrder = () => {
  const orderId = props.position.order?.orderId
  const url = orderId ? `/orders/${orderId}` : '/orders/new'
  router.push(url)
}
</script>

<template>
  <PositionsListItemOpen
    v-if="isOpen"
    @click="editOrder">
    {{ props.position.name }}
  </PositionsListItemOpen>
  <PositionsListItemNew
    v-else
    :position="props.position"
    @click="editOrder">
    {{ props.position.name }}
  </PositionsListItemNew>
</template>