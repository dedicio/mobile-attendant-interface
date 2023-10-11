<script setup lang='ts'>
import PositionsListItemOpen from './PositionsListItemOpen.vue'
import PositionsListItemNew from './PositionsListItemNew.vue'
</script>

<template>
  <section class="grid grid-cols-3 gap-2">
    <PositionsListItemNew />
    <PositionsListItemOpen />
    <PositionsListItemOpen />
    <PositionsListItemOpen />
    <PositionsListItemOpen />
  </section>
</template>
