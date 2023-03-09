<script setup lang='ts'>
import CheckListItemOpen from './CheckListItemOpen.vue'
import CheckListItemNew from './CheckListItemNew.vue'
</script>

<template>
  <section class="grid grid-cols-3 gap-2">
    <CheckListItemNew />
    <CheckListItemOpen />
    <CheckListItemOpen />
    <CheckListItemOpen />
    <CheckListItemOpen />
  </section>
</template>
