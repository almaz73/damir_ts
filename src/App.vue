<template>
  <router-view/>
  <!--  Для стилизации панели авторизации -->
  <!--   <TransparentTemplate src="login.JPG" top="0" left="0" use="1"/>-->

  <!-- Треться версия дизайна -->
  <!--  <TransparentTemplate src="variant_3.png" top="0" left="0" use="1" originSize="1200px"/>-->

  <!-- Треться версия дизайна -->
  <TransparentTemplate src="variant_3.png" top="0" left="0" use="1" originSize="1200px"/>

  <!-- 1920 -->
  <!--  <TransparentTemplate src="1920.png" top="0" left="0" use="1" originSize="1920px"/>-->

  <!-- 1920_2-->
  <!--  <TransparentTemplate src="1920_2.png" top="0" left="0" use="1" originSize="1920px"/>-->

  <TmpLinks/>

</template>

<script setup>
import TransparentTemplate from "./develop/TransparentTemplate.vue";
import {onMounted} from "vue";
import TmpLinks from "./develop/TmpLinks.vue";
import {useRouter} from "vue-router";

const router = useRouter()

onMounted(() => {
  console.log('== === === === 111 cardNumber', window.cardNumber);
  // window.cardNumber - при открытии из основной программы получаем id КТ
  // для работы напрямую, без перехода из основной программы, берем id вызова из адресной строки
  if (!window.cardNumber) window.cardNumber = location.href.split('/').slice(-1)[0]


  // Если пришли из основной программы:
  location.href.includes('ambulance') && router.push('/#ambulance/2/callcard/' + window.cardNumber)
})

</script>

<style>
</style>
