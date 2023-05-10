<script setup lang="ts">
import {onMounted} from "vue";
import TmpLinks from "./develop/TmpLinks.vue";
import TransparentTemplate from "./develop/TransparentTemplate.vue";
import {useRouter} from "vue-router";

const router = useRouter()

declare global {
  interface Window {
    cardNumber: any;
  }
}
let cardNumber: number

onMounted((): void => {
  cardNumber = window.cardNumber
  console.log('== === === === 111 cardNumber', cardNumber);
  if (!cardNumber) cardNumber = +location.href.split('/').slice(-1)[0]
  if (cardNumber) location.href.includes('ambulance') && router.push('/ambulance/2#/callcard/' + cardNumber)
})

</script>

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

<style>
</style>
