<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ICategory } from './ICategory';
import { IProduct } from './IProduct'
import ProductListFilter from './ProductListFilter.vue';
import ProductListItem from './ProductListItem.vue'

const products: IProduct[] = reactive([
  {
    id: '123',
    name: 'Hamburguer',
    price: 20.34,
    image: 'url da image',
    category: 'Lanche',
    description: 'Hamburguer de 120g, mussarela, tomate, maionese e pão com gergelim',
  },
  {
    id: '456',
    name: 'Batata frita',
    price: 16.20,
    image: 'url da image',
    category: 'Lanche',
    description: 'Batatas canoa com cebolinha',
  }
])

const categories: ICategory[] = reactive([
  {
    id: 'first',
    name: 'Lanches',
  },
  {
    id: 'second',
    name: 'Bebidas',
  }
]);

const filter = (value: string) => console.log(value);

</script>

<template>
  <ProductListFilter :categories="categories" @on-filter="filter" />
  <div>
    <ProductListItem
      v-for="product in products"
      :key="product.id"
      :product="product" />
  </div>
</template>