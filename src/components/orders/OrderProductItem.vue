<script setup lang="ts">
import { computed } from 'vue';
import currency from '../../utils/currency';
import { IOrderItem } from './IOrder';

interface Props {
  item: IOrderItem
}

interface Emits {
  (e: 'itemUpdated', value: IOrderItem): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const currencyPrice = computed(() => {
  return currency.formatCurrency(props.item.price)
})

const updateItem = () => emit('itemUpdated', props.item)
</script>

<template>
  <div
    class="flex flex-col md:grid gap-4 md:grid-cols-5 shadow-md rounded p-4 mb-4 cursor-pointer">
    <div class="col-span-3">
      <h3 class="text-2xl">{{ item.product }}</h3>
    </div>
    <div class="col-span-1 text-right flex justify-between">
      <span class="text-2xl block">{{ currencyPrice }}</span>
      <button class="mt-2" @click.stop="updateItem">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  </div>
</template>

