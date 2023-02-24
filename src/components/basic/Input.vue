<script setup lang="ts">
interface Props {
  type?: string
  value?: [string, number]
  placeholder?: string
}

const { type = 'text' } = defineProps<Props>()
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="value"
    class="border-blue rounded w-full border p-1" />
</template>