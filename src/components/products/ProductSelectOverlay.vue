<script setup lang="ts">
import { reactive, onMounted, computed } from 'vue';
import { ICategory } from './ICategory';
import { IProduct } from './IProduct';
import OverlayContent from '../layout/OverlayContent.vue';
import ProductListFilter from './ProductListFilter.vue';
import ProductListItem from './ProductListItem.vue';
import Loading from '../basic/Loading.vue';
import * as productsApi from '../../utils/productsApi';
import * as categoriesApi from '../../utils/categoriesApi';

interface Props {
  orderId?: string,
}

interface State {
  products: IProduct[],
  categories: ICategory[],
  isLoading: boolean,
  filter: string,
};

const props = defineProps<Props>()

const state = reactive<State>({
  products: [],
  categories: [],
  isLoading: false,
  filter: '',
});

onMounted(async () => {
  state.isLoading = true;
  const receivedProducts: IProduct[] = await productsApi.getProducts();
  const receivedCategories: ICategory[] = await categoriesApi.getCategories();

  state.categories.push(...receivedCategories);
  state.products.push(...receivedProducts);
  state.isLoading = false;
});

const hasProducts = computed(() => state.products.length === 0);

const filteredProducts = computed(() => {
  if (state.filter === '') {
    return state.products;
  }

  return state.products.filter(product => product.categoryId === state.filter);
});
const changeFilter = (value: string) => {
  state.filter = value;
};

const addProduct = (product: IProduct) => {
  console.log('adicionando...', product.id);
};
</script>

<template>
  <OverlayContent>  
    <section class="flex flex-col justify-center bg-white rounded">
      <div class=" w-full py-2 px-4">
        <h2 class="text-2xl border-b pb-2 mb-4">Escolhas os produtos</h2>
        <div v-if="state.isLoading" class="flex justify-center items-center h-full">
          <Loading></Loading>
        </div>
        <template v-else>
          <div v-if="hasProducts" class="flex justify-center items-center h-full">
            <p>Nenhum produto encontrado</p>
          </div>
          <div v-else>
            <ProductListFilter :categories="state.categories" @on-filter="changeFilter" />
            <div>
              <ProductListItem
                v-for="product in state.products"
                :key="product.id"
                :product="product"
                @product-added="addProduct" />
            </div>
          </div>
        </template>
      </div>
    </section>
  </OverlayContent>
</template>
