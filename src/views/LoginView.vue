<script setup lang='ts'>
import EmptyLayout from '../components/layout/Empty.vue'
import Field from '../components/basic/Field.vue'
import Button from '../components/basic/Button.vue'
import { ref } from 'vue';
import { useAuthStore } from '../stores';

const email = ref('');
const password = ref('');

const authStore = useAuthStore();

function onSubmit() {
  console.log('login' , email.value, password.value);
  
  return authStore.login(email.value, password.value);
}
</script>

<template>
  <EmptyLayout>
    <section class="flex flex-col justify-center items-center min-h-screen min-w-full">
      <div class="w-96">
        <Field
          v-model="email"
          label="E-mail" />
        <Field
          v-model="password"
          label="Senha"
          type="password" />
        <div class="pt-2">
          <Button
            label="Entrar"
            theme="primary"
            full
            @click="onSubmit">
          </Button>
        </div>
      </div>
    </section>
  </EmptyLayout>
</template>
