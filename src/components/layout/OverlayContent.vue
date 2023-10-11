<script setup lang='ts'>
import Button from '../basic/Button.vue';

interface Emits {
  (e: 'close'): void
  (e: 'save'): void
}

const emit = defineEmits<Emits>()

const close = () => {
  emit('close')
}

const save = () => {
  emit('save')
}
</script>

<template>
  <Transition>
    <section class="absolute z-50 w-full h-full left-0 top-0 bg-light-gray pb-16">
      <div class="flex justify-center items-center text-xl py-2 px-4 h-16 bg-orange text-white">
        Modal
      </div>
      <div class="h-full px-2 pt-2 pb-[4.5rem] overflow-y-auto">
        <slot />
      </div>
      <div class="fixed bottom-0 flex justify-between bg-white w-full py-2 px-4 h-16">
        <Button label="Cancelar" @click="close" />
        <Button label="Salvar" theme="primary" @click="save" />
      </div>
    </section>
  </Transition>
</template>