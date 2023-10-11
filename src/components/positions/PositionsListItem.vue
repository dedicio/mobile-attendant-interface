<script setup lang='ts'>
import { computed } from 'vue'

interface Props {
  label: string
  type: 'new' | 'open'
}

const props = defineProps<Props>()

const cssClasses = computed(() => {
  const newClasses = [
    'border-blue',
    'bg-light-gray',
    'border-dashed',
    'text-blue'
  ]

  const openClasses = [
    'border-orange',
    'bg-light-orange',
  ]

  return props.type === 'new' ? newClasses : openClasses
})
</script>

<template>
  <button class="rounded border-2 p-4 flex flex-col items-center cursor-pointer w-full" :class="cssClasses">
    <span>
      <slot />
    </span>
    <span>
      {{ label }}
    </span>
  </button>
</template>