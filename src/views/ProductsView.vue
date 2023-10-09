<script setup lang='ts'>
import PageTitle from '../components/basic/PageTitle.vue';
import DefaultLayout from '../components/layout/Default.vue';
import ProductList from '../components/products/ProductList.vue';
</script>

<template>
  <DefaultLayout>
    <PageTitle title="Produtos" />
    <ProductList />
  </DefaultLayout>
</template>
