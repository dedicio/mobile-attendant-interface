<script setup lang="ts">
import { reactive, onMounted, computed } from 'vue';
import { ICategory } from './ICategory';
import { IProduct } from './IProduct';
import ProductListFilter from './ProductListFilter.vue';
import ProductListItem from './ProductListItem.vue';
import Loading from '../basic/Loading.vue';
import * as productsApi from '../../utils/productsApi';
import * as categoriesApi from '../../utils/categoriesApi';

const products: IProduct[] = reactive([]);
const categories: ICategory[] = reactive([]);

onMounted(async () => {
  const receivedProducts: IProduct[] = await productsApi.getProducts();
  const receivedCategories: ICategory[] = await categoriesApi.getCategories();

  categories.push(...receivedCategories);
  products.push(...receivedProducts);
});

const isLoading = computed(() => products.length === 0);

const filter = (value: string) => console.log(value);
</script>

<template>
  <div v-if="isLoading" class="flex justify-center items-center h-full">
    <Loading></Loading>
  </div>
  <template v-else>
    <!-- <ProductListFilter :categories="categories" @on-filter="filter" /> -->
    <div>
      <ProductListItem
        v-for="product in products"
        :key="product.id"
        :product="product" />
    </div>
  </template>
</template>