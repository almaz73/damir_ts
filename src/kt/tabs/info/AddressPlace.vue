<script setup>
import AddressCtrl from "@/components/address/AddressCtrl.vue";
import AddressLine from "@/components/addressLine/AddressLine.vue";
</script>

<template>
  <div class="addr">
    <div class="head-add">

      <h3>Место вызова</h3>
      <el-checkbox>Только местные объекты</el-checkbox>
    </div>

    <AddressLine/>

    <AddressCtrl/>

  </div>


</template>


