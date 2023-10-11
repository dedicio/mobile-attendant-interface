<script setup lang='ts'>
import { onMounted, reactive, ref } from 'vue';
import * as positionsApi from '../../utils/positionsApi';
import * as groupsApi from '../../utils/groupsApi';
import { IPositionRequest } from './IPosition';
import { IOption } from '../basic/IOption';
import { IGroup } from '../positions/IGroup';
import Field from '../basic/Field.vue';
import FieldSelect from '../basic/FieldSelect.vue';
import OverlayContent from '../layout/OverlayContent.vue';
import Loading from '../basic/Loading.vue';
import Notification from '../basic/Notification.vue';

type Type = 'info' | 'success' | 'error'

interface Notification {
  type?: Type
  message?: string
}

const isLoading = ref(false);
const notification = reactive<Notification>({});
const groups: IOption[] = reactive([]);
const position: IPositionRequest = reactive({
    name: '',
    description: '',
    groupId: '',
});

onMounted(async () => {
  const receivedGroups: IGroup[] = await groupsApi.getGroups();
  const options = receivedGroups.map(group => ({
    id: group.id,
    label: group.name,
  }));
  groups.push(...options);
});

function save() {
  isLoading.value = true;
  return positionsApi
    .createPosition(position)
    .then(() => {
      notification.message = 'Categoria cadastrada com sucesso!';
      notification.type = 'success';
      position.name = '';
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
        <h3 class="py-2 px-4 border-b font-semibold">Nova Mesa</h3>
        <div class=" w-full py-2 px-4">
          <Field
            v-model="position.name"
            label="Nome" />
          <Field
            v-model="position.description"
            label="Descrição" />
          <FieldSelect
            v-model="position.groupId"
            :options="groups"
            label="Selecione um tipo de atendimento" />
        </div>
      </section>
    </template>
  </OverlayContent>
</template>
