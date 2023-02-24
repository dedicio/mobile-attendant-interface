<script setup lang='ts'>
import PageTitle from '../components/basic/PageTitle.vue';
import DefaultLayout from '../components/layout/Default.vue';
import ServicesList from '../components/services/ServicesList.vue';
</script>

<template>
  <DefaultLayout>
    <PageTitle title="Serviços" />
    <ServicesList  />
  </DefaultLayout>
</template>
