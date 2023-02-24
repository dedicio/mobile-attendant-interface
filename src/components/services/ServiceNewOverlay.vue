<script setup lang='ts'>
import Field from '../basic/Field.vue'
import OverlayContent from '../layout/OverlayContent.vue'
</script>

<template>
  <OverlayContent>
    <section class="bg-white py-2 px-4 m-2 rounded">
      <Field label="Nome" />
      <div>
        <label for="">Mesa</label>
        <select name="" id="">
          <option disabled value="">Selecione uma mesa</option>
          <option value="1">Mesa 1</option>
          <option value="4">Mesa 4</option>
        </select>
      </div>
    </section>
  </OverlayContent>
</template>