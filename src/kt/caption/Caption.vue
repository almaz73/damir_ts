<script setup>
import StatusButtons from "./StatusButtons.vue";
import StopWatch from "./StopWatch.vue";

import {ref} from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'События',
  },
  {
    value: 'Option2',
    label: 'Отметки',
  },
  {
    value: 'Option3',
    label: 'Идентифицировать пациента',
  },
  {
    value: 'Option4',
    label: 'Поиск пациента по реестру',
  },
  {
    value: 'Option5',
    label: 'Телефонная книга',
  },
  {
    value: 'Option6',
    label: 'Поиск аудиозаписей',
  }]
</script>

<template>
  <div class="caption-kt">
    <div class="row">
      <h1>Редактирование для НП (№14905)</h1>
      &nbsp;&nbsp;
      <el-button class="special-little">
        Изменить признак вызова
      </el-button>
      <el-select v-model="value" class="m-2" placeholder="Действия">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
      <StopWatch/>
    </div>
    <StatusButtons/>
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
