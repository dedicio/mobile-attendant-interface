<script setup lang="ts">
import { computed } from 'vue'
import Input from "./Input.vue";

type StringOrNumber = string | number

interface Props {
  label: string
  type?: string
  modelValue?: StringOrNumber
  required?: boolean
  placeholder?: string
}

interface Emits {
  (e: 'update:modelValue', value?: StringOrNumber): void
}

const props = defineProps<Props>()
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
  <div class="my-2">
    <label>{{ label }}</label>
    <Input
      v-model="value"
      :type="type"
      :placeholder="placeholder" />
  </div>
</template>