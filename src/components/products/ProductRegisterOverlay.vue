<script setup lang='ts'>
import { reactive, onMounted } from 'vue';
import { ICategory } from './ICategory';
import Field from '../basic/Field.vue';
import FieldSelect from '../basic/FieldSelect.vue';
import OverlayContent from '../layout/OverlayContent.vue';
import { IOption } from '../basic/IOption';
import { IProductRequest } from './IProduct';
import * as categoriesApi from '../../utils/categoriesApi';
import * as productsApi from '../../utils/productsApi';

const categories: IOption[] = reactive([]);

onMounted(async () => {
  const receivedCategories: ICategory[] = await categoriesApi.getCategories();
  const options = receivedCategories.map(category => ({
    id: category.id,
    label: category.name,
  }));
  categories.push(...options);
});

const product: IProductRequest = reactive({
    name: '',
    price: 0,
    categoryId: '',
});

function save() {
  return productsApi.createProduct(product);
}
</script>

<template>
  <OverlayContent
    @save="save">
    <section class="flex flex-col justify-center bg-white rounded">
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
  </OverlayContent>
</template>