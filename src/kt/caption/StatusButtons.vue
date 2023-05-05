<script setup>

import {ref} from "vue";

let buttons = ref([{text: 'КВ заполнена', color: 'grey',},
  {text: 'КВ не проверена', color: 'grey',},
  {text: 'Идентифицирован', color: 'green-bold',},
  {text: 'Принят из Служба 112 № [ноя25_оказание_532] (принят (112))', color: 'red',},
  {text: 'Передан в Полиция (02)', color: 'red',},
  {text: 'Связан с №424 (ЗАДВ)', color: 'yellow',},
  {text: 'ЕДДС (Новокузнецкий ГО ЕДДС)', color: 'green-light',},
  {text: 'Передан в Полиция (02)', color: 'red',},
  // {text: 'Связан с №424 (ЗАДВ)', color: 'yellow',},
  // {text: 'ЕДДС (Новокузнецкий ГО ЕДДС)', color: 'green-light',}
])
</script>

<template>
  <div class="status-button">
    <el-button v-for="button in buttons" :class="[button.color]" class="round">{{ button.text }}</el-button>
  </div>
</template>

<style scoped>

.status-button {
  margin-bottom: 15px;
}

.grey {
  background: var(--dark-gray);
}

.green-bold {
  background: #599D52;
  color: white;
}

.yellow {
  background: #FBE5A2;
}

.red {
  background: #F5D7D7;
  color: #971111;
}

.green-light {
  background: #B3D7AF;
}
</style>
