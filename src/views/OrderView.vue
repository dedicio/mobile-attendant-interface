<script setup lang='ts'>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import PageTitle from '../components/basic/PageTitle.vue'
import DefaultLayout from '../components/layout/Default.vue'
import OrderEdit from '../components/orders/OrderEdit.vue'

const route = useRoute()
const title = computed(() => route.params.id ? 'Editar Pedido' : 'Novo Pedido')	
const orderId = computed(() => route.params.id ? `${route.params.id}` : undefined)
</script>

<template>
  <DefaultLayout>
    <PageTitle :title="title" />
    <OrderEdit :order-id="orderId"></OrderEdit>
  </DefaultLayout>
</template>
