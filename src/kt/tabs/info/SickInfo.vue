<script setup>
import AddressCtrl from "@/components/address/AddressCtrl.vue";
import {ref} from "vue";
import {useKtStore} from "@/kt/stores/ktStore";

const ktStore = useKtStore()
let rad1 = ref(ktStore.kt.patient.sex.code)

</script>

<template>
  <h3>Сведения о больном</h3>
  <div class="row">
    <span class="label"><a>Фамилия</a></span>
    <el-input v-model="ktStore.kt.patient.surname"/>
    <span class="label"><a>Имя</a></span>
    <el-input v-model="ktStore.kt.patient.name"/>
    <span class="label"><a>Отчество</a></span>
    <el-input v-model="ktStore.kt.patient.patronymic"/>
  </div>
  <div class="row">
    <span class="label"><a>Дата выдачи</a></span>
    <el-date-picker style="width: 100%"/>
    <span class="label"><a>Лет</a></span>
    <el-select style="min-width: 90px"  v-model="ktStore.kt.patient.age"/>
    <el-radio-group v-model="rad1" style="text-space: nowrap">
      <el-radio label="1">Мужчина</el-radio>
      <el-radio label="2">Женщина</el-radio>
    </el-radio-group>
  </div>

  <div class="head-add">
    <h3>Адрес регистрации</h3>
    <el-checkbox>Совпадает с адресом регистрации</el-checkbox>
  </div>
<!--  <AddressCtrl/>-->
</template>

<style scoped>
.el-radio-group {
  flex-wrap: nowrap;
}
</style>
