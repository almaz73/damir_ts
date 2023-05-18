<script setup>
import ServiceInfo from "./ServiceInfo.vue";
import MapPanel from "@/kt/tabs/info/MapPanel.vue";
import {useKtStore} from "@/kt/stores/ktStore";

let ktStore = useKtStore()

</script>

<template>
  <div>
    <MapPanel v-show="ktStore.showMap"/>
    <ServiceInfo v-if="!ktStore.showMap"/>
  </div>
</template>