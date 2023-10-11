<script setup lang='ts'>
import { reactive, onMounted, ref } from 'vue';
import { ICategory } from './ICategory';
import Field from '../basic/Field.vue';
import FieldSelect from '../basic/FieldSelect.vue';
import OverlayContent from '../layout/OverlayContent.vue';
import Loading from '../basic/Loading.vue';
import Notification from '../basic/Notification.vue';
import { IOption } from '../basic/IOption';
import { IProductRequest } from './IProduct';
import * as categoriesApi from '../../utils/categoriesApi';
import * as productsApi from '../../utils/productsApi';

type Type = 'info' | 'success' | 'error'

interface Notification {
  type?: Type
  message?: string
}

const isLoading = ref(false);
const notification = reactive<Notification>({});
const categories: IOption[] = reactive([]);
const product: IProductRequest = reactive({
    name: '',
    price: 0,
    categoryId: '',
});

onMounted(async () => {
  const receivedCategories: ICategory[] = await categoriesApi.getCategories();
  const options = receivedCategories.map(category => ({
    id: category.id,
    label: category.name,
  }));
  categories.push(...options);
});

function save() {
  isLoading.value = true;
  return productsApi
    .createProduct(product)
    .then(() => {
      notification.message = 'Produto cadastrado com sucesso!';
      notification.type = 'success';
      product.name = '';
      product.description = '';
      product.price = 0;
      product.categoryId = '';
      product.image = '';
    })
    .catch((error) => {
      const message = 'Erro ao cadastrar produto!'
      notification.message = error.message || message;
      notification.type = 'error';
    })
    .finally(() => {
      isLoading.value = false;
    });
}
</script>

<template>
  <OverlayContent
    @save="save">
    <div v-if="isLoading" class="flex justify-center items-center h-full">
      <Loading></Loading>
    </div>
    <template v-else>
      <Notification
        :message="notification.message"
        :theme="notification.type"
        class="mt-2 mb-4" />
      <section class="flex flex-col justify-center bg-white rounded">
        <h3 class="py-2 px-4 border-b font-semibold">Novo Produto</h3>
        <div class=" w-full py-2 px-4">
          <Field
            v-model="product.name"
            label="Nome" />
          <Field
            v-model="product.description"
            label="Descrição" />
          <Field
            v-model="product.price"
            label="Preço"
            type="number" />
          <FieldSelect
            v-model="product.categoryId"
            :options="categories"
            label="Selecione a categoria" />
          <Field
            v-model="product.image"
            label="Imagem" />
        </div>
      </section>
    </template>
  </OverlayContent>
</template>