<script setup lang='ts'>
import PageTitle from '../components/basic/PageTitle.vue'
import DefaultLayout from '../components/layout/Default.vue'
import OrderList from '../components/orders/OrderList.vue'
</script>

<template>
  <DefaultLayout>
    <PageTitle title="Pedidos" />
    <OrderList />
  </DefaultLayout>
</template>
