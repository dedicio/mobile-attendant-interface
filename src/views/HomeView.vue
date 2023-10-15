<script setup lang='ts'>
import { computed } from 'vue';
import { Store } from 'pinia'
import { useAuthStore, AuthState, AuthActions } from '../stores'
import DefaultLayout from '../components/layout/Default.vue'
import Button from '../components/basic/Button.vue';

const auth: Store<'auth', AuthState, {}, AuthActions> = useAuthStore()

const hasAdminPermission = computed(() => auth.user?.level === 'Administrador')
</script>

<template>
  <DefaultLayout>
    <h3 class="text-xl my-4">Boas vindas!!</h3>
    <p class="mb-4">
        Comece a usar o sistema clicando em um dos botões abaixo:
    </p>
    <Button
        label="Pedidos"
        theme="primary"
        full
        to="/orders"
        class="mb-2">
    </Button>
    <Button
        label="Mesas"
        theme="secondary"
        full
        to="/positions"
        class="mb-2">
    </Button>
    <Button
        label="Produtos"
        theme="secondary"
        full
        to="/products"
        class="mb-2">
    </Button>
    <template v-if="hasAdminPermission">
        <p class="mt-4 mb-4">
            Para acessar a área administrativa, clique no botão abaixo:
        </p>
        <Button
            label="Cadastros"
            theme="secondary"
            full
            to="/admin"
            class="mb-2">
        </Button>
    </template>
  </DefaultLayout>
</template>
