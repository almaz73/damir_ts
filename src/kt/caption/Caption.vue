<script setup lang="ts">
import {ref} from 'vue'
// @ts-ignore
import StatusButtons from "./StatusButtons.vue";
// @ts-ignore
import StopWatch from "./StopWatch.vue";
// @ts-ignore
import AssignEmployeeModal from "@/kt/caption/modals/AssignEmployeeModal.vue";
// @ts-ignore
import EventModal from "@/kt/caption/modals/EventModal.vue";
// @ts-ignore
import CallSignModal from "@/kt/caption/modals/CallSignModal.vue";
import {useKtStore} from "@/kt/stores/ktStore";

const ktStore = useKtStore()

let action = ref()

let actions = [
  {id: 1, name: 'Событие'},
  {id: 2, name: 'Назначить сотрудника'},
  {id: 3, name: 'Передать вызов в ДДС'},
  {id: 4, name: 'История передач в ДДС'},
  {id: 5, name: 'Обмен данными'},
  {id: 6, name: 'Транспортировка'},
  {id: 7, name: 'Отметки'},
  {id: 8, name: 'История'},
  {id: 9, name: 'Идентифицировать пациента'},
  {id: 10, name: 'Поиск пациента по реестру'},
  {id: 11, name: 'Разблокировать'},
  {id: 12, name: 'Заблокировать'},
  {id: 13, name: 'Телефонная книга'},
  {id: 14, name: 'Поиск аудиозаписей'},
  {id: 15, name: 'Подписать'},
  {id: 16, name: 'Просмотреть ЭЦП'},
  {id: 17, name: 'Показать диалог'},
  {id: 18, name: 'Отправить сопр.лист'},
  {id: 19, name: 'Запросить талон к сопрлисту'},
  {id: 20, name: 'Заполнить из шаблона'},
  {id: 21, name: 'Вызовы к пациенту'},
  {id: 22, name: 'Отправка оповещения по вызову'},
  {id: 23, name: 'Чат по заявке'},
  {id: 24, name: 'Просмотр ЭКГ'},
  {id: 25, name: 'Изменить в ГИП'}
]

function changeDo(a: number) {
  switch (a) {
    case 1: //'Событие'
      ktStore.openModal('EventModal');
      break
    case 2: // 'Назначить сотрудника'
      ktStore.openModal('AssignEmployeeModal');
      break
  }

  action.value = null
}

</script>

<template>
  <div class="caption-kt">
    <div class="row">
      <h1>Редактирование для НП (№14905)</h1>
      &nbsp;&nbsp;
      <el-button
          class="special-little"
          @click="ktStore.openModal('CallSignModal')">
        Изменить признак вызова
      </el-button>
      <el-select
          v-model="action"
          @change="changeDo"
          placeholder="Действия">
        <el-option
            v-for="item in actions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
        />
      </el-select>
      <StopWatch/>
    </div>
    <StatusButtons/>

    <CallSignModal/>
    <EventModal/>
    <AssignEmployeeModal/>
  </div>
</template>

<style>
.caption-kt {
  padding: 0 25px;
}

.caption-kt h1 {
  display: inline-block;

  margin-top: 18px;
  margin-bottom: 9px;
  font-size: 25px;
}


</style>
