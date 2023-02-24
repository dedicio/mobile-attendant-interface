<script setup lang='ts'>
import Button from '../basic/Button.vue';

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => {
  emit('close')
}

const save = () => {
  console.log('salvou')
  emit('close')
}
</script>

<template>
  <Transition>
    <section class="absolute z-50 w-full h-full left-0 top-0 bg-light-gray">
      <div class="flex justify-center items-center text-xl py-2 px-4 h-16 bg-orange text-white">
        Modal
      </div>
      <div>
        <slot />
      </div>
      <div class="fixed bottom-0 flex justify-between bg-white w-full py-2 px-4 h-16">
        <Button label="Cancelar" @click="close" />
        <Button label="Salvar" theme="primary" @click="save" />
      </div>
    </section>
  </Transition>
</template>