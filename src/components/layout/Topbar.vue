<script setup lang='ts'>
import Button from '../basic/Button.vue';


</script>

<template>
  <header class="fixed flex justify-center left-0 top-0 w-full bg-light-gray h-14">
    <nav class="flex justify-between w-full lg:w-[56rem] p-2">
      <div>
        <Button label="Voltar" />
      </div>
      <div>
        Logo
      </div>
      <div>
        <Button label="Encerrar" theme="primary" />
      </div>
    </nav>
  </header>
</template>
