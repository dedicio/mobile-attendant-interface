<script setup lang="ts">
import { ICategory } from './ICategory';

interface Props {
  category: ICategory,
}

interface Emits {
  (e: 'onFilter', value: string): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const filter = () => {
  emit('onFilter', props.category.id)
}
</script>

<template>
  <li class="py-2 px-4 uppercase bg-yellow cursor-pointer ml-px first:ml-0 first:rounded-l last:rounded-r"
  @click="filter">
    {{ category.name }}
  </li>
</template>
