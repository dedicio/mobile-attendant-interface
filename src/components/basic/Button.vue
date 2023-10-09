<script setup lang="ts">
import { computed } from 'vue'
import { router } from '../../routes';

interface Props {
  theme?: string
  label: string
  full?: boolean
  to?: string
}

const props = defineProps<Props>()

const classes = computed(() => {
  const { full, theme } = props
  const all = [
    'rounded',
    'p-2'
  ]

  switch (theme) {
    case 'primary':
      all.push(
        'bg-orange',
        'text-white',
      )
      break

    default:
      all.push(
        'bg-light-gray',
        'text-blue',
      )
      break
  }

  if (full) {
    all.push('w-full')
  }

  return all
})

function goTo() {
  if (props.to) {
    router.push(props.to)
  }
}
</script>

<template>
  <button
    :class="classes"
    @click="goTo">
    {{ label }}
  </button>
</template>