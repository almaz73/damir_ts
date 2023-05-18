<script setup>
import MapAddress from '@/components/address/MapControl.vue'
import {ref} from 'vue'
import {useKtStore} from "@/kt/stores/ktStore";

const mapControl = ref(null)
let isOpen = false

useKtStore().$subscribe((mutation, state) => {
  state.showMap ? showed() : hided()
})

function showed() {
  if (!isOpen) mapControl.value.showed()
  isOpen = true
}

function hided() {
  mapControl.value.hided()
}

// Очень нужная функция для передачи наверх ссылку на внутренние методы
defineExpose({showed, hided})

</script>
<template>
  <div id="map-place">
    <MapAddress ref="mapControl"/>
  </div>
</template>
<style scoped>
#map-place {

  width: 100%;
  height: 730px;
  overflow: hidden;
}
</style>