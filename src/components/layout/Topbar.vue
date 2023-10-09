<script setup lang='ts'>
import Button from '../basic/Button.vue';
import Logo from './Logo.vue';
import { useAuthStore } from '../../stores'

const authStore = useAuthStore()

function logout() {
  authStore.logout()
}
</script>

<template>
  <header class="fixed flex justify-center left-0 top-0 w-full bg-light-gray h-14">
    <nav class="flex justify-between w-full lg:w-[56rem] p-2">
      <!-- <div>
        <Button label="Voltar" />
      </div> -->
      <div>
        <Logo></Logo>
      </div>
      <div>
        <Button
          label="Sair"
          @click="logout">
        </Button>
      </div>
    </nav>
  </header>
</template>
