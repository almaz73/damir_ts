<script setup lang="ts">
import axios from "axios";
import {useRouter} from "vue-router";

const router = useRouter()

function resetServer(): void {
  console.log('Сброс кэша сервера')
}

function exit(): void {
  router.push({path: '/login'});
  axios.post('/ambulance/logout')
}

</script>

<template>
  <div class="adminSMP">
    <el-button>
      <img src="../assets/img/headMenu/adm.png" alt=""/>
      adminSMP
      <img class="triangle" src="../assets/img/blue_triangle.png" alt="">
      <div class="adminSMP-panel">
        <button class="btn-test-server">
          <span class="panel-test">
            <span>Тестовый сервер</span>
            <img src="../assets/img/greenOk.png" alt="">
          </span>
          <span class="panel-cache" @click="resetServer">
            <img src="../assets/img/repeate.png" alt="">
            Сброс кэша сервера
          </span>
        </button>
        <button class="gby">
          ГБУ РМЭ «ССМП»
        </button>
        <button class="full-access">
          Полный доступ Марий Эп<br/>(Администратор системы)
        </button>
        <button class="panel-exit" @click="exit">
          <img src="../assets/img/exit_accaunt.png" alt="">
          Выход
        </button>
      </div>
    </el-button>
  </div>
</template>

<style scoped>
.triangle {
  transition: all .3s;
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

.adminSMP:hover .triangle {
  transform: rotate(-180deg);
}

.adminSMP:hover .adminSMP-panel {
  display: block;
}

.adminSMP-panel:hover .adminSMP-panel {
  display: block;
}

.adminSMP-panel .panel-test,
.adminSMP-panel .panel-cache,
.adminSMP-panel .panel-exit {
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
</style>