<script setup>
// Вспомогательный модуль, для приклеивания шаблона макета над сайтом
// Используем полупрозрачный слой чтобы сравнивать программу с дизайном
// для точечного совпадения с дизайном
import {computed, ref} from "vue";

const props = defineProps({
  top: {type: String, default: '0'},
  left: {type: String, default: '0'},
  src: {type: String},
  use: {type: String, default: '1'},
  toolLeft: {type: Number},
  originSize: {type: String, default: '100%'}
})

let value = ref(+localStorage.getItem('OPACITE') || 0.2)

const image = computed(() => {
  return '../src/assets/tmpImg/' + props.src
})

function save() {
  localStorage.setItem('OPACITE', this.value)
}

</script>

<template>
  <div :style="{'display':use==1?'block':'none'}">
    <div class="tools" :style="{left:toolLeft+'px'}">
      <el-slider class="slider" @mouseout="save()" v-model="value" vertical height="200px"/>
    </div>
    <div class="opac">
      <div class="template" :style="{opacity:value/100, top:top+'px', left:left+'px'}">
        <img :src="image" :style="{width: originSize}">
      </div>
    </div>
  </div>
</template>

<style scoped>
.opac {
  top: 0;
  left: 0;
  width: 100%;
  position: absolute;
  pointer-events: none;
  z-index: 1000;
  overflow-x: clip
}

.template {
  width: 1900px; /* жестко устанавливаем ширину, если не передан параметр originSize*/
  position: absolute;
}

.tools {
  z-index: 1000000;
  pointer-events: none;
  display: flex;
  width: 100%;
  height: 50vh;
  justify-content: flex-start;
  position: fixed;
  top: 30px;
}

.tools .slider {
  opacity: 0.5;
  pointer-events: visible;
}

.tools .slider:hover {
  opacity: 1;
}
</style>
