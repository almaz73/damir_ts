<script setup lang="ts">
const emits = defineEmits(['modalClose', 'modalAnswer'])
const props = defineProps({
  isVisible: {type: Boolean, default: true},
  title: {type: String, default: ''},
  width: {type: String, default: '300px'},
  cancel: {type: String, default: 'Отмена'}
})
</script>


<template>
  <el-dialog v-model="props.isVisible" :title="props.title" :width="width" draggable>
    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button v-if="cancel" @click="emits('modalClose')">{{ cancel }}</el-button>
        <el-button type="primary" @click="emits('modalAnswer', 'примнимаем')">Принять</el-button>
      </span>
    </template>
  </el-dialog>
</template>