<script setup lang="ts">
import { computed } from 'vue';
import currency from '../../utils/currency';
import { IOrderItem } from './IOrder';

interface Props {
  item: IOrderItem
}

const props = defineProps<Props>()

const currencyPrice = computed(() => {
  return currency.formatCurrency(props.item.price)
})
</script>

<template>
  <div
    class="flex flex-col md:grid gap-4 md:grid-cols-5 shadow-md rounded p-4 mb-4 cursor-pointer">
    <div class="col-span-3">
      <h3 class="text-2xl">{{ item.product }}</h3>
    </div>
    <div class="col-span-1 text-right flex justify-between">
      <span class="text-2xl block">{{ currencyPrice }}</span>
      <span class="text-2xl">{{ item.quantity }}</span>
    </div>
  </div>
</template>

