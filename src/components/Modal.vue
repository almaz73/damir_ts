<script setup lang="ts">
const emits = defineEmits(['modalClose', 'modalAnswer'])
const props = defineProps({
  isVisible: {type: Boolean, default: true},
  title: {type: String}
})
</script>


<template>
  <el-dialog v-model="props.isVisible" :title="props.title" width="300px" draggable>
    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="emits('modalClose')">Отмена</el-button>
        <el-button type="primary" @click="emits('modalAnswer', 'примнимаем')">Принять</el-button>
      </span>
    </template>
  </el-dialog>
</template>