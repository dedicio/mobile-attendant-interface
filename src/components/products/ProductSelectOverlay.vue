<script setup lang="ts">
import { reactive, onMounted, computed } from 'vue';
import { Store } from 'pinia';
import { ICategory } from './ICategory';
import { IProduct } from './IProduct';
import { useOrdersStore, OrdersState, OrdersActions } from '../../stores/ordersStore';
import OverlayContent from '../layout/OverlayContent.vue';
import ProductListFilter from './ProductListFilter.vue';
import ProductListItem from './ProductListItem.vue';
import Loading from '../basic/Loading.vue';
import * as productsApi from '../../utils/productsApi';
import * as categoriesApi from '../../utils/categoriesApi';

interface Props {
  orderId: string,
}

interface State {
  products: IProduct[],
  categories: ICategory[],
  isLoading: boolean,
  filter: string,
};

const ordersStore: Store<'orders', OrdersState, {}, OrdersActions> = useOrdersStore()

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
  const item = {
    id: product.id,
    product: product.name,
    quantity: 1,
    price: product.price,
  };
  const order = ordersStore.getOrderById(props.orderId);
  if (!order) {
    return;
  }

  if (!order.items) {
    order.items = [];
  }

  const existentProduct = order.items.findIndex(item => item.id === product.id);
  if (existentProduct >= 0) {
    item.quantity = order.items[existentProduct].quantity + 1;
    order.items[existentProduct] = item;
  } else {
    order?.items.push(item);
  }

  ordersStore.updateOrder(order)
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
            <!-- <ProductListFilter :categories="state.categories" @on-filter="changeFilter" /> -->
            <div>
              <ProductListItem
                v-for="product in filteredProducts"
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
