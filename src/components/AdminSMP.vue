<script setup lang="ts">
import {ref} from "vue";

let activeAdminSMP = ref<boolean>(false)

function openAdminSMP():void {
  activeAdminSMP.value = true
}

function closeAdminSMP():void {
  activeAdminSMP.value = false
}
</script>

<template>
  <el-button
      @mouseover="openAdminSMP()"
      :class="{active: activeAdminSMP}"
      class="adminSMP"
  >
    <img src="../assets/img/headMenu/adm.png"/>
    adminSMP
    <img class="triangle" src="../assets/img/blue_triangle.png">
    <div class="adminSMP-panel">
      <button class="btn-test-server">
        <div class="panel-test">
           <span>Тестовый сервер</span>
          <img src="../assets/img/greenOk.png">
        </div>
        <div class="panel-cache">
          <img src="../assets/img/repeate.png">
          Сброс кэша сервера
        </div>
      </button>
      <button class="gby">
        ГБУ РМЭ «ССМП»
      </button>
      <button class="full-access">
        Полный доступ Марий Эп<br/>(Администратор системы)
      </button>
      <button class="panel-exit">
        <img src="../assets/img/exit_accaunt.png">
        Выход
      </button>
    </div>
  </el-button>
  <div
      @click="closeAdminSMP()"
      :class="{active: activeAdminSMP}"
      class="popup-background"
  />
</template>

<style scoped>
.triangle {
  transition: all .5s;
}
.adminSMP {
  position: relative;
}
.adminSMP-panel {
  background-color: #fff;
  display: none;
  max-width: 254px;
  position: absolute;
  top: 35px;
  right: 10px;
  z-index: 12;
  border-width: 0 1px 1px 1px;
  border: solid #D8D9D9;
  border-radius: 0 0 6px 6px;
}
.adminSMP-panel button {
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #D8D9D9;
  display: block;
  padding: 16px 31px 17px 28px;
  cursor: pointer;
  text-align: left;
}
.adminSMP.active .triangle {
  transform: rotate(-180deg);
}
.adminSMP.active .adminSMP-panel {
  display: block;
}
.adminSMP-panel .panel-test,
.adminSMP-panel .panel-cache,
.adminSMP-panel .panel-exit{
  display: flex;
  align-items: center;
}

.panel-test span {
  display: inline-block;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  color: #D8332E;
  margin-right: 8px;
  margin-bottom: 3px;
}
.panel-cache {
  font-size: 15px;
  line-height: 100%;
  color: #238FD9;
}
.panel-exit {
  font-size: 17px;
  line-height: 100%;
  color: #D8332E;
}
.gby {
  font-size: 16px;
  line-height: 100%;
  color: #3B3A3B;
}
.full-access {
  font-size: 16px;
  line-height: 120%;
  color: #3B3A3B;
}
.popup-background {
  display: none;
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 11;
  background-color: transparent;
}
.popup-background.active {
  display: block;
}
</style>