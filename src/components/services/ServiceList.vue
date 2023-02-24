<script setup lang='ts'>
import ServiceListItemOpen from './ServiceListItemOpen.vue';
import ServiceListItemNew from './ServiceListItemNew.vue';
</script>

<template>
  <section class="grid grid-cols-3 gap-2">
    <ServiceListItemNew />
    <ServiceListItemOpen />
    <ServiceListItemOpen />
    <ServiceListItemOpen />
    <ServiceListItemOpen />
  </section>
</template>
