<script setup lang='ts'>
import Field from '../components/basic/Field.vue'
import Button from '../components/basic/Button.vue'
</script>

<template>
  <section class="flex flex-col justify-center items-center min-h-screen min-w-full">
    <div class="w-96">
      <Field label="Nome" />
      <Field label="Senha" type="password" />
      <div class="pt-2">
        <Button label="Entrar" theme="primary" full />
      </div>
    </div>
  </section>
</template>
