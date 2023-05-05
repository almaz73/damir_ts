<script setup>
import AddressCtrl from "@/components/AddressCtrl.vue";
import {ref} from "vue";

let rad1 = ref('1')


</script>

<template>
  <h3>Сведения о больном</h3>
  <div class="row">
    <span class="label"><a>Фамилия</a></span>
    <el-input/>
    <span class="label"><a>Имя</a></span>
    <el-input/>
    <span class="label"><a>Отчество</a></span>
    <el-input/>
  </div>
  <div class="row">
    <span class="label"><a>Дата выдачи</a></span>
    <el-date-picker style="width: 100%"/>
    <span class="label"><a>Лет</a></span>
    <el-select style="min-width: 90px" placeholder=""/>
    <el-radio-group v-model="rad1" style="text-space: nowrap">
      <el-radio label="1">Мужчина</el-radio>
      <el-radio label="2">Женщина</el-radio>
    </el-radio-group>
  </div>

  <div class="head-add">
    <h3>Адрес регистрации</h3>
    <el-checkbox>Совпадает с адресом регистрации</el-checkbox>
  </div>
  <AddressCtrl/>
</template>

<style scoped>
.el-radio-group {
  flex-wrap: nowrap;
}
</style>
