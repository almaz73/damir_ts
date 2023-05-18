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
    <Modal :isVisible="ktStore.modalName === 'EventModal'"
           @close="modalclose"
           @modalClose="modalclose"
           @modalAnswer="modalAnswer"
           width="800px"
           :title="'Событие'">
      <div style="width: 100%">
        EventModal <b style="font-size: 32px">Big</b>
      </div>
    </Modal>

  </div>
</template>