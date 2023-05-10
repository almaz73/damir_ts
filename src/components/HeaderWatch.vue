<script setup lang="ts">
import {ref, onBeforeUnmount} from 'vue'

const formatTime = ref<string>('')
let updateTimeInterval: number;

function run(): void {
  const date: Date = new Date()
  const minutes: string = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2)

  if (formatTime.value !== minutes) formatTime.value = minutes

  clearTimeout(updateTimeInterval)
  updateTimeInterval = setTimeout(run, 1000)
}

run()

onBeforeUnmount(() => {
  clearTimeout(updateTimeInterval)
})
</script>

<template>
  <div class="watch-block">
    <span>
      {{ formatTime }}
    </span>
  </div>
</template>

<style scoped>

.watch-block {
  color: #3B3A3B;
  border: 1px solid #3B3A3B;
  border-radius: 5px;
  margin: 3px 17px;
}

.watch-block span {
  padding: 0 9px;
  font-weight: 700;
  font-size: 28px;
  line-height: 30px;
}
</style>
