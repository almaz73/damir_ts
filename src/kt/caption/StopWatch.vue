<template>
  <div class="stop-watch">
    <span>
      {{ resultStr }}
    </span>
  </div>
</template>

<script setup lang="ts">
import {ref, onBeforeUnmount} from 'vue'
const resultStr = ref<string>('')
let hour:number = 0
let min:number = 0
let sec:number = 0
let timeout:number

function updateTimer():void{
  sec++
  if(sec >= 60){
    min++
    sec = 0
  }
  if(min >= 60){
    hour++
    min = 0
  }
  resultStr.value = `${hour > 0 ? format(hour) + ':' : ''}${format(min) + ':'}${format(sec)}`

  clearTimeout(timeout)
  timeout = setTimeout(updateTimer, 1000)
}
updateTimer()

function format(num:number):string{
  return num < 10 ? `0${num}` : `${num}`
}
onBeforeUnmount(() => {
  clearTimeout(timeout)
})
</script>

<style scoped>
.stop-watch {
  color: #ff4444;
  font-size: 20px;
  margin-left: 10px;
}
</style>
