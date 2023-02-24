<script setup lang='ts'>
import PageTitle from '../components/basic/PageTitle.vue';
import DefaultLayout from '../components/layout/Default.vue';
import ServiceList from '../components/services/ServiceList.vue';
</script>

<template>
  <DefaultLayout>
    <PageTitle title="Serviços" />
    <ServiceList  />
  </DefaultLayout>
</template>
