<script setup lang="ts">
import Input from "./Input.vue";

interface Props {
  type?: string
  label: string
  value?: [string, number]
  required?: boolean
  placeholder?: string
}

defineProps<Props>()

</script>

<template>
  <div class="my-2">
    <label>{{ label }}</label>
    <Input
      :type="type"
      :value="value"
      :placeholder="placeholder" />
  </div>
</template>