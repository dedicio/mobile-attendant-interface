<script setup lang='ts'>
import { reactive, ref } from 'vue';
import Field from '../basic/Field.vue';
import OverlayContent from '../layout/OverlayContent.vue';
import Loading from '../basic/Loading.vue';
import Notification from '../basic/Notification.vue';
import * as groupsApi from '../../utils/groupsApi';
import { IGroupRequest } from './IGroup';

type Type = 'info' | 'success' | 'error'

interface Notification {
  type?: Type
  message?: string
}

const isLoading = ref(false);
const notification = reactive<Notification>({});

const group: IGroupRequest = reactive({
    name: '',
});

function save() {
  isLoading.value = true;
  return groupsApi
    .createGroup(group)
    .then(() => {
      notification.message = 'Categoria cadastrada com sucesso!';
      notification.type = 'success';
      group.name = '';
    })
    .catch((error) => {
      const message = 'Erro ao cadastrar categoria!'
      notification.message = error.message || message;
      notification.type = 'error';
    })
    .finally(() => {
      isLoading.value = false;
    });
}
</script>

<template>
  <OverlayContent
    @save="save">
    <div v-if="isLoading" class="flex justify-center items-center h-full">
      <Loading></Loading>
    </div>
    <template v-else>
      <Notification
        :message="notification.message"
        :theme="notification.type"
        class="mt-2 mb-4" />
      <section
        class="flex flex-col justify-center bg-white rounded">
        <h3 class="py-2 px-4 border-b font-semibold">Novo Tipo de Atendimento</h3>
        <div class=" w-full py-2 px-4">
          <Field
            v-model="group.name"
            label="Nome" />
        </div>
      </section>
    </template>
  </OverlayContent>
</template>