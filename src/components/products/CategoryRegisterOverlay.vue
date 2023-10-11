<script setup lang='ts'>
import { reactive } from 'vue';
import Field from '../basic/Field.vue'
import OverlayContent from '../layout/OverlayContent.vue'
import { api } from '../../utils/api';

const apiUrl = `${import.meta.env.VITE_API_URL}/registers/categories`

interface Category {
  name: string,
}

const category: Category = reactive({
    name: '',
});

function save() {
  return api.post(apiUrl, category);
}
</script>

<template>
  <OverlayContent
    @save="save">
    <section class="flex flex-col justify-center bg-white rounded">
      <div class=" w-full py-2 px-4">
        <Field
          v-model="category.name"
          label="Nome" />
      </div>
    </section>
  </OverlayContent>
</template>