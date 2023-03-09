<script setup lang='ts'>
import { reactive } from 'vue';
import Field from '../basic/Field.vue'
import FieldSelect from '../basic/FieldSelect.vue';
import OverlayContent from '../layout/OverlayContent.vue'

interface Order {
  client?: string,
  table?: number,
}

const order: Order = reactive({});
</script>

<template>
  <OverlayContent>
    <section class="flex flex-col justify-center bg-white rounded">
      <div class=" w-full py-2 px-4">
        <Field
          v-model="order.client"
          label="Nome" />
        <FieldSelect
          v-model="order.table"
          label="Selecione a mesa" />
      </div>
    </section>
  </OverlayContent>
</template>