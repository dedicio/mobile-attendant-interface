<script setup lang="ts">
import { computed } from 'vue'

type StringOrNumber = string | number

interface Props {
  type?: string
  modelValue?: StringOrNumber
  placeholder?: string
}

interface Emits {
  (e: 'update:modelValue', value?: StringOrNumber): void
}

const props = withDefaults(
  defineProps<Props>(),
  {
    type: 'text',
  }
)
const emit = defineEmits<Emits>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    v-model="value"
    class="border-blue rounded w-full border p-1" />
</template>