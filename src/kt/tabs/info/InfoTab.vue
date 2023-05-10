<script setup lang="ts">
import CommonInfo from "./CommonInfo.vue";
import AddressPlace from "./AddressPlace.vue";
import SickInfo from "./SickInfo.vue";
import ServiceInfo from "./ServiceInfo.vue";
</script>

<template>
  <div class="info">
    <div class="info__common">
      <CommonInfo/>
    </div>
    <div class="info__address">
      <AddressPlace/>
    </div>
    <div class="info__sickinfo"> <SickInfo/></div>
    <div class="info__service"> <ServiceInfo/></div>
  </div>
</template>
<style scoped>
.info {
  display: grid;
  grid-template-columns: 1fr 35%;
  grid-template-areas: 'info__common info__service' 'info__address info__service' 'info__sickinfo info__service';
}

.info__common {
  grid-area: info__common;
  padding: 0 24px;
}

.info__address {
  grid-area: info__address;
  padding: 0 24px;
}

.info__sickinfo {
  grid-area: info__sickinfo;
  padding: 0 24px;
}

.info__service {
  padding: 0 24px;
  grid-area: info__service;
  border-left: 1px solid var(--dark-gray);
}
</style>
