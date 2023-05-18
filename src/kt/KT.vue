<script setup lang="ts">
// @ts-ignore
import NavMenu from "../components/NavMenu.vue";
// @ts-ignore
import HeaderMenu from "../components/HeaderMenu.vue";
import {useKtStore} from "@/kt/stores/ktStore";
// @ts-ignore
import Caption from "./caption/Caption.vue";
// @ts-ignore
import InfoTab from "./tabs/info/InfoTab.vue";
// @ts-ignore
import {ref} from "vue";

const ktStore = useKtStore()
const activeName = ref<string>('info')


function handleClick(e: object) {
  if (e.props.name === 'inspection') {
    // mapPanel.value.showed()
  }
}
</script>

<template>
  <header>
    <HeaderMenu/>
  </header>
  <div class="kt">
    <nav :class="{ 'nav-mobile--active': ktStore.showLeftMenu }">
      <NavMenu/>
    </nav>
    <section>
      <Caption/>


      <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick" stretch="true">
        <el-tab-pane label="Инфо" name="info">
          <InfoTab/>
        </el-tab-pane>
        <el-tab-pane label="Осмотр" name="inspection">
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
