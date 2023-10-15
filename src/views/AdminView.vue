<script setup lang="ts">
import { ref } from 'vue';
import DefaultLayout from '../components/layout/Default.vue'
import Button from '../components/basic/Button.vue'
import UserRegisterOverlay from '../components/users/UserRegisterOverlay.vue'
import ProductRegisterOverlay from '../components/products/ProductRegisterOverlay.vue'
import CategoryRegisterOverlay from '../components/products/CategoryRegisterOverlay.vue'
import GroupsRegisterOverlay from '../components/positions/GroupsRegisterOverlay.vue'
import PositionsRegisterOverlay from '../components/positions/PositionsRegisterOverlay.vue'

const showUserRegisterModal = ref(false);
const openUserRegisterModal = () => showUserRegisterModal.value = true;
const toggleUserRegisterModal = () => showUserRegisterModal.value = !showUserRegisterModal.value;

const showProductRegisterModal = ref(false);
const openProductRegisterModal = () => showProductRegisterModal.value = true;
const toggleProductRegisterModal = () => showProductRegisterModal.value = !showProductRegisterModal.value;

const showCategoryRegisterModal = ref(false);
const openCategoryRegisterModal = () => showCategoryRegisterModal.value = true;
const toggleCategoryRegisterModal = () => showCategoryRegisterModal.value = !showCategoryRegisterModal.value;

const showGroupRegisterModal = ref(false);
const openGroupRegisterModal = () => showGroupRegisterModal.value = true;
const toggleGroupRegisterModal = () => showGroupRegisterModal.value = !showGroupRegisterModal.value;

const showPositionRegisterModal = ref(false);
const openPositionRegisterModal = () => showPositionRegisterModal.value = true;
const togglePositionRegisterModal = () => showPositionRegisterModal.value = !showPositionRegisterModal.value;
</script>

<template>
    <DefaultLayout>
        <h1 class="text-2xl mb-4">Admin</h1>
        <p class="mb-4">
            Faça os cadastros clicando nos botões abaixo:
        </p>
        <div class="mb-2">
            <Button
                label="Cadastrar Usuário"
                full
                @click="openUserRegisterModal"></Button>
        </div>
        <div class="mb-2">
            <Button
                label="Cadastrar Produto"
                full
                @click="openProductRegisterModal"></Button>
        </div>
        <div class="mb-2">
            <Button
                label="Cadastrar Categoria"
                full
                @click="openCategoryRegisterModal"></Button>
        </div>
        <div class="mb-2">
            <Button
                label="Cadastrar Tipo de Atendimento"
                full
                @click="openGroupRegisterModal"></Button>
        </div>
        <div class="mb-2">
            <Button
                label="Cadastrar Mesa"
                full
                @click="openPositionRegisterModal"></Button>
        </div>
    </DefaultLayout>
    <UserRegisterOverlay
        v-if="showUserRegisterModal"
        @close="toggleUserRegisterModal" />
    <ProductRegisterOverlay
        v-if="showProductRegisterModal"
        @close="toggleProductRegisterModal" />
    <CategoryRegisterOverlay
        v-if="showCategoryRegisterModal"
        @close="toggleCategoryRegisterModal" />
    <GroupsRegisterOverlay
        v-if="showGroupRegisterModal"
        @close="toggleGroupRegisterModal" />
    <PositionsRegisterOverlay
        v-if="showPositionRegisterModal"
        @close="togglePositionRegisterModal" />
</template>
