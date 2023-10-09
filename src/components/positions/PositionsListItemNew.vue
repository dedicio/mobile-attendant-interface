<script setup lang='ts'>
import { ref } from 'vue'
import PositionsListItem from './PositionsListItem.vue'
import PositionsNewOverlay from './PositionsNewOverlay.vue'

const showModal = ref(false)

const toggleModal = () => showModal.value = !showModal.value
</script>

<template>
  <PositionsListItem label="Iniciar nova comanda" type="new" @click="toggleModal">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </PositionsListItem>
  <PositionsNewOverlay v-if="showModal" @close="toggleModal" />
</template>