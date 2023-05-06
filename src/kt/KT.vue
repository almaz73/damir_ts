<script setup lang="ts">
import NavMenu from "../components/NavMenu.vue";
import HeaderMenu from "../components/HeaderMenu.vue";
import {useCallcardStore} from "../stores/callCardStores.js";
import {onMounted, ref} from "vue";
import {useTriggerMenu} from "../stores/triggerMenu.js";
import Caption from "./caption/Caption.vue";
import InfoTab from "./tabs/info/InfoTab.vue";

const triggerMenu = useTriggerMenu()
const callcardStore = useCallcardStore()
const activeName = ref<string>('info')

function handleClick(tab:object, event:object) {
  console.log('tab', tab)
}

onMounted(() => {
  callcardStore.getAll().then(res => {
    console.log('Получение данных с сайта, res = ', res.data);
  })
})
</script>

<template>
  <header>
    <HeaderMenu/>
  </header>
  <div class="kt">
    <nav :class="{ 'nav-mobile--active': triggerMenu.show }">
      <NavMenu/>
    </nav>
    <section>
      <Caption/>


      <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
        <el-tab-pane label="Инфо" name="info">
          <InfoTab/>
        </el-tab-pane>
        <el-tab-pane label="Осмотр" name="inspection">
          <!-- provided-assist-->
          Осмотр
        </el-tab-pane>
        <el-tab-pane label="ФОМС" name="foms">ФОМС</el-tab-pane>
        <el-tab-pane label="Ребенок" name="child">Ребенок</el-tab-pane>
        <el-tab-pane label="Оценка" name="rating">Оценка</el-tab-pane>
        <el-tab-pane label="СЛР" name="slr">СЛР</el-tab-pane>
        <el-tab-pane label="Талон" name="ticket">Талон</el-tab-pane>
        <el-tab-pane label="Файлы" name="files">Файлы</el-tab-pane>
        <el-tab-pane label="Стандарт" name="standart">Стандарт(accord)</el-tab-pane>
        <el-tab-pane label="Расчет" name="payment">Расчет</el-tab-pane>
      </el-tabs>
    </section>
  </div>
</template>
