<script setup>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

let map

function showed() {
  const tileUrl = 'https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&scale=1.25&lang=ru_RU' // яндексовая подложка
  // "http://{s}.tile.osm.org/{z}/{x}/{y}.png" по умолчанию (openstreetmap)

  map = L.map("mapContainer").setView([54.05, 55.05], 5);
  map.options.crs = L.CRS.EPSG3395 // яндексовское смещение
  L.tileLayer(tileUrl).addTo(map);
  L.marker([50, 14]).addTo(map);

  // setTimeout(()=>map.invalidateSize(), 500) - если плитки не заполняют карту
  L.Util.requestAnimFrame(map.invalidateSize, map, false, map._container);// - если плитки не заполняют карту
}

function hided() {
  if (map) map.remove();
}

defineExpose({showed, hided})
</script>

<template>
  <div id="mapContainer"></div>
</template>

<style scoped>
#mapContainer {
  width: 100%;
  height: 100vh;
}
</style>