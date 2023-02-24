<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>

<template>
  <h1 class="text-2xl mb-4">{{ title  }}</h1>
</template>