<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

import { useAuthStore } from './stores';

const authStore = useAuthStore();
</script>

<template >
  <div class="flex justify-center bg-light-gray min-w-full">
    <RouterView />
  </div>
</template>
