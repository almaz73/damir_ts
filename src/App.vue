<script setup lang="ts">
import {onMounted} from "vue";
import TmpLinks from "./develop/TmpLinks.vue";
import TransparentTemplate from "./develop/TransparentTemplate.vue";
import {useRouter} from "vue-router";
import './kt/stores/_g_axios.ts';

const router = useRouter()

declare global {
  interface Window {
    cardNumber: any;
  }
}
let cardNumber: number

onMounted((): void => {
  cardNumber = window.cardNumber
  if (!cardNumber) cardNumber = +location.href.split('/').slice(-1)[0]
  if (cardNumber) location.href.includes('ambulance') && router.push('/ambulance/2#/callcard/' + cardNumber)

  console.log('   cardNumber',cardNumber);

})

</script>

<template>
  <router-view/>
  <!--  Для стилизации панели авторизации -->
  <!--   <TransparentTemplate src="login.JPG" top="0" left="0" use="1"/>-->

  <!-- Треться версия дизайна -->
  <!--  <TransparentTemplate src="variant_3.png" top="0" left="0" use="1" originSize="1200px"/>-->

  <!-- Треться версия дизайна -->
<!--  <TransparentTemplate src="variant_3.png" top="0" left="0" use="1" originSize="1200px"/>-->

  <!-- 1920 -->
  <!--  <TransparentTemplate src="1920.png" top="0" left="0" use="1" originSize="1920px"/>-->

  <!-- 1920_2 -->
    <TransparentTemplate src="1920_2.png" top="0" left="0" use="1" originSize="1920px"/>

  <!-- 1366 -->
<!--  <TransparentTemplate src="1366.png" top="0" left="0" use="1" originSize="1366px"/>-->

  <!-- 1280 -->
<!--  <TransparentTemplate src="1280.png" top="0" left="0" use="1" originSize="1280px"/>-->

  <!-- 1200 -->
<!--  <TransparentTemplate src="1200.png" top="0" left="0" use="1" originSize="1200px"/>-->

  <!-- 1920_2-->
  <!--  <TransparentTemplate src="1920_2.png" top="0" left="0" use="1" originSize="1920px"/>-->

<!--  <TransparentTemplate src="callsign.png" top="135" left="545" use="1" originSize="837px"/>-->

  <TmpLinks/>

</template>

<style>
</style>
