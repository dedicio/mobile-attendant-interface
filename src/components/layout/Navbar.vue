<script setup lang='ts'>
import NavbarItem from './NavbarItem.vue';

const services = [
  {
    label: 'Mesas',
    url: '/positions',
    icon: '',
  },
  {
    label: 'Pedidos',
    url: '/orders',
    icon: '',
  },
  {
    label: 'Produtos',
    url: '/products',
    icon: '',
  }
  // {
  //   label: 'Usuário',
  //   url: '/users',
  //   icon: '',
  // },
]
</script>

<template>
  <footer class="fixed flex justify-center left-0 bottom-0 w-full bg-light-orange h-16">
    <nav role="navigation" class="w-full lg:w-[56rem]">
      <ul class="flex w-full h-full content-center">
        <NavbarItem
          v-for="(item, index) in services"
          :key="index"
          :label="item.label"
          :url="item.url" />
      </ul>
    </nav>
  </footer>
</template>
