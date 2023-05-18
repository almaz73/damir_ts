<script setup lang="ts">
// @ts-ignore
import Modal from '@/components/Modal.vue';
import {useKtStore} from "@/kt/stores/ktStore";

const ktStore = useKtStore()
const modalclose = () => ktStore.modalName = ''

function modalAnswer() {
  console.log("Ответ положительный",)
  ktStore.modalName = ''
}

</script>
<template>
  <div>
    <Modal :isVisible="ktStore.modalName === 'CallSignModal'"
           @close="modalclose"
           @modalClose="modalclose"
           @modalAnswer="modalAnswer"
           width="500px"
           :show-close="false"
           cancel=""
           :title="'Признак вызова'">
      <div style="width: 100%">
        Признак
      </div>
    </Modal>

  </div>
</template>