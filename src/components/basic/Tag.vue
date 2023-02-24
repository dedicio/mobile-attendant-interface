<script setup lang="ts">
import { computed } from 'vue'

type Theme = 'success' | 'danger' | 'warning' | 'info' | 'default'

interface Props {
  label: string
  theme?: Theme 
}

const props = defineProps<Props>()

const themeClasses = computed(() => {
  let classes: string

  switch (props.theme) {
    case 'success':
      classes = 'bg-green text-white'
      break;

    case 'warning':
      classes = 'bg-yellow'
      break;

    case 'info':
      classes = 'bg-blue text-white'
      break;
  
    default:
      classes = 'border-black'
      break;
  }

  return classes
})
</script>

<template>
  <span class="rounded py-1 px-2 self-baseline text-sm" :class="themeClasses">{{ label }}</span>
</template>