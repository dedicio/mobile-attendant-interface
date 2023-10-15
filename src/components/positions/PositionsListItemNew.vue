<script setup lang='ts'>
import { ref } from 'vue'
</script>

<template>
  <button
    class="rounded border-2 p-4 flex flex-col items-center cursor-pointer w-full border-blue bg-light-gray border-dashed text-blue">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
      class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>
      <slot></slot>
    </span>
  </button>
</template>