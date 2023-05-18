<script setup lang="ts">
import {useRouter} from "vue-router";
import {useKtStore} from "@/kt/stores/ktStore";
import {ref} from "vue";
import HeaderWatch from "@/components/HeaderWatch.vue";
import AdminSMP from "./AdminSMP.vue";

const router = useRouter()
let activeButton = ref<boolean>(false)

function triggerMenu(): void {
  useKtStore().showLeftMenu = !useKtStore().showLeftMenu
  activeButton.value = useKtStore().showLeftMenu
}

</script>
<template>
  <div class="herder-menu">
    <span class="sandwich">
      <img src="../assets/img/headMenu/sandwich.png" @click="triggerMenu()" alt=""/>
    </span>
    <header-watch/>
    <el-button class="version">
      v.1.42.0
      <div class="text-version">Версия 1.42.0 от 24 января 2023 17:33</div>
    </el-button>
    <el-button text>
      <img src="../assets/img/headMenu/testLink.png" alt=""/>
      Тест связи
    </el-button>
    <el-button text>
      <img src="../assets/img/headMenu/documentation.png" alt=""/>
      Документация
    </el-button>
    <el-button text>
      <img src="../assets/img/headMenu/112.png" alt=""/>
      112
    </el-button>
    <el-button text>
      <img src="../assets/img/headMenu/support.png" alt=""/>
      Техподдержка
    </el-button>
    <el-button text>
      <img src="../assets/img/headMenu/sign.png" alt=""/>
      Подписать
    </el-button>
    <el-button text>
      <img src="../assets/img/headMenu/message.png" alt=""/>
      Оповещение
    </el-button>

    <span style="flex-grow: 1"/>

    <AdminSMP/>
  </div>
</template>
<style>
/* Верхнее меню */

.herder-menu {
  white-space: nowrap;
  display: flex;
  padding: 1px;
  /*justify-content: space-between;*/
}

.herder-menu .version:hover .text-version {
  display: block;
}

.herder-menu .text-version {
  position: absolute;
  background: white;
  color: black;
  top: 40px;
  left: 120px;
  border: 1px solid #D8D9D9;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;
  box-shadow: 5px 5px 5px #bbb;
  display: none;
}

.herder-menu .el-button {
  margin-right: 2px;
  background: #D5E0EB;
  padding: 11px;
}

.herder-menu .el-button img {
  margin-right: 3px;
}

.herder-menu .sandwich {
  display: none;
  cursor: pointer;
}

.herder-menu .adminSMP {
  display: flex;
  align-items: center;
  background-color: #EFEFEF;
}


@media (width < 900px) {
  .herder-menu .sandwich {
    display: inline-block;
  }
}

/* Содержимое КТ */
.kt .head-add {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
