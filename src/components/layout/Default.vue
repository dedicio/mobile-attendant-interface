<script setup lang='ts'>
import Navbar from './Navbar.vue'
import Topbar from './Topbar.vue';
</script>

<template>
  <main class="w-full lg:w-[56rem] min-h-screen bg-white">
    <Topbar />
    <div class="pt-16 px-2 pb-20 w-full">
      <slot />
    </div>
    <Navbar />
  </main>
</template>
