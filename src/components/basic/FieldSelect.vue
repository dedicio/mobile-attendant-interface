<script setup lang="ts">
import { computed } from 'vue'
import Select from "./Select.vue";

type StringOrNumber = string | number

interface Option {
  label: string,
  id: string,
}

interface Props {
  label: string
  modelValue?: StringOrNumber
  options: Option[],
  required?: boolean
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
    <Select
      v-model="value"
      :options="options" />
  </div>
</template>