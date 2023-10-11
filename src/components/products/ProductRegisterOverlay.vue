<script setup lang='ts'>
import { reactive } from 'vue';
import Field from '../basic/Field.vue'
import FieldSelect from '../basic/FieldSelect.vue';
import OverlayContent from '../layout/OverlayContent.vue'

interface Product {
  name: string,
  description?: string,
  price: number,
  image?: string,
  categoryId: string,
}

const categories = [
  {
    id: '1',
    label: 'Bebidas',
  },
  {
    id: '2',
    label: 'Lanches',
  },
  {
    id: '3',
    label: 'Sobremesas',
  },
];

const product: Product = reactive({
    name: '',
    price: 0,
    categoryId: '',
});

function save() {
  console.log('save', product);
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