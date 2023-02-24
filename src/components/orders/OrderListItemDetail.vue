<script setup lang="ts">
import { computed } from 'vue'
import { OrderItem } from './IOrder'

const props = defineProps<OrderItem>()

const statusList = {
  open: {
    label: 'Em preparo',
    theme: 'warning',
  },
  done: {
    label: 'Pronto',
    theme: 'success',
  },
  delivered: {
    label: 'Entregue',
    theme: 'info',
  },
}

const status = computed(() => {
  return statusList[props.status]
})

</script>

<template>
  <li class="flex justify-between border-t border-dashed border-orange py-1">
    <div>
      <p>{{ name }}</p>
      <p>{{ observation }}</p>
    </div>
    <Tag :label="status.label" :theme="status.theme" />
  </li>
</template>