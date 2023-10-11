<script setup>
import { ref } from 'vue';
import DefaultLayout from '../components/layout/Default.vue'
import Button from '../components/basic/Button.vue'
import ProductRegisterOverlay from '../components/products/ProductRegisterOverlay.vue'

const showProductRegisterModal = ref(false);
const openProductRegisterModal = () => showProductRegisterModal.value = true;
const toggleProductRegisterModal = () => showProductRegisterModal.value = !showProductRegisterModal.value;
</script>

<template>
    <DefaultLayout>
        <h1 class="text-2xl mb-4">Admin</h1>
        <p class="mb-4">
            Faça os cadastros clicando nos botões abaixo:
        </p>
        <div>
            <Button
                label="Cadastrar Produto"
                full
                @click="openProductRegisterModal"></Button>
        </div>
    </DefaultLayout>
    <ProductRegisterOverlay
        v-if="showProductRegisterModal"
        @close="toggleProductRegisterModal" />
</template>
