<script setup lang="ts">
import { ICategory } from './ICategory';
import ProductListFilterItem from './ProductListFilterItem.vue';

interface Props {
  categories: ICategory[],
}

interface Emits {
  (e: 'onFilter', value: string): void
}

defineProps<Props>()

const emit = defineEmits<Emits>()

const emitFilter = (value: string) => emit('onFilter', value)
</script>

<template>
  <ul class="flex mb-4">
    <ProductListFilterItem
      v-for="category in categories"
      :key="category.id"
      :category="category"
      @on-filter="emitFilter" />
  </ul>
</template>
