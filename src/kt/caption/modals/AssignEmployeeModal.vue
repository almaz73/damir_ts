<script setup lang="ts">
// @ts-ignore
import Modal from '@/components/Modal.vue';
import {useKtStore} from "@/kt/stores/ktStore";

const ktStore = useKtStore()
const modalclose = () => ktStore.modalName = ''

function modalAnswer() {
  console.log("Ответ положительный)")
  modalclose()
}

</script>
<template>
  <div>
    <Modal :isVisible="ktStore.modalName === 'AssignEmployeeModal'"
           @close="modalclose"
           @modalClose="modalclose"
           @modalAnswer="modalAnswer"
           :title="'Назначить сотрудника'">
      <div style="width: 100%">
        EventModal <b style="color:pink">Pink</b>
      </div>
    </Modal>

  </div>
</template>