<script setup lang="ts">
import { computed } from 'vue'
import { IOption } from './IOption'

type StringOrNumber = string | number

interface Props {
  modelValue?: StringOrNumber,
  options: IOption[],
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
  <select
    v-model="value"
    class="bg-white border-blue rounded w-full border p-1">
    <option
      disabled
      :value="undefined">Selecione uma mesa</option>
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.id">
      {{ option.label }}
    </option>
  </select>
</template>
