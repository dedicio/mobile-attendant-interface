<script setup lang='ts'>
import { reactive, onMounted, ref } from 'vue';
import { ILevel } from './ILevel';
import Field from '../basic/Field.vue';
import FieldSelect from '../basic/FieldSelect.vue';
import OverlayContent from '../layout/OverlayContent.vue';
import Loading from '../basic/Loading.vue';
import Notification from '../basic/Notification.vue';
import { IOption } from '../basic/IOption';
import { IUserRequest } from './IUser';
import * as levelsApi from '../../utils/levelsApi';
import * as usersApi from '../../utils/usersApi';

type Type = 'info' | 'success' | 'error'

interface Notification {
  type?: Type
  message?: string
}

const isLoading = ref(false);
const notification = reactive<Notification>({});
const levels: IOption[] = reactive([]);
const user: IUserRequest = reactive({
    name: '',
    email: '',
    phone: '',
    password: '',	
    levelId: '',
});

onMounted(async () => {
  const receivedLevels: ILevel[] = await levelsApi.getLevels();
  const options = receivedLevels.map(level => ({
    id: level.id,
    label: level.name,
  }));
  levels.push(...options);
});

function save() {
  isLoading.value = true;
  return usersApi
    .createUser(user)
    .then(() => {
      notification.message = 'Usuário cadastrado com sucesso!';
      notification.type = 'success';
      user.name = '';
      user.email = '';
      user.phone = '';
      user.password = '';
      user.levelId = '';
      
    })
    .catch((error) => {
      const message = 'Erro ao cadastrar usuário!'
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
      <section class="flex flex-col justify-center bg-white rounded">
        <h3 class="py-2 px-4 border-b font-semibold">Novo Usuário</h3>
        <div class=" w-full py-2 px-4">
          <Field
            v-model="user.name"
            label="Nome" />
          <Field
            v-model="user.email"
            label="E-mail"
            type="email" />
          <Field
            v-model="user.phone"
            label="Telefone" />
          <Field
            v-model="user.password"
            label="Senha"
            type="password" />
          <FieldSelect
            v-model="user.levelId"
            :options="levels"
            label="Selecione o nível" />
        </div>
      </section>
    </template>
  </OverlayContent>
</template>