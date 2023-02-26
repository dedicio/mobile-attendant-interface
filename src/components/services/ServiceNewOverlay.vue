<script setup lang='ts'>
import Field from '../basic/Field.vue'
import FieldSelect from '../basic/FieldSelect.vue';
import OverlayContent from '../layout/OverlayContent.vue'
</script>

<template>
  <OverlayContent>
    <section class="flex flex-col justify-center bg-white rounded">
      <div class=" w-full py-2 px-4">
        <Field label="Nome" />
        <FieldSelect label="Selecione a mesa" />
      </div>
    </section>
  </OverlayContent>
</template>