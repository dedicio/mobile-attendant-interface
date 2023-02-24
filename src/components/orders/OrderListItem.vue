<script setup lang="ts">
import Tag from '../basic/Tag.vue';
import { Order } from './IOrder'

const orders: Order[] = [
  {
    id: '123',
    client: 'abcs',
    items: [
      {
        name: 'Salada',
        observation: 'Observação',
        status: 'done'
      }
    ]
  }
]
</script>

<template>
  <div class="rounded py-2 px-4 bg-light-gray">
    <div class="flex justify-between text-xl mb-2">
      <h2>Mesa 2 <span>#123</span></h2>
      <span>12:00</span>
    </div>
    <h3 class="font-bold mb-1">Itens:</h3>
    <ul>
      <li class="flex justify-between border-t border-dashed border-orange py-1">
        <div>
          <p>Salada</p>
          <p>Observações</p>
        </div>
        <Tag label="Pronto" theme="success" />
      </li>
      <li class="flex justify-between border-t border-dashed border-orange py-1">
        <div>
          <p>Salada</p>
          <p>Observações</p>
        </div>
        <Tag label="Em preparo" theme="warning" />
      </li>
      <li class="flex justify-between border-t border-dashed border-orange py-1">
        <div>
          <p>Salada</p>
          <p>Observações</p>
        </div>
        <Tag label="Entregue" theme="info" />
      </li>
    </ul>
  </div>
</template>