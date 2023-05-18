<script setup>
import {ref} from "vue";
import {useCaptionStore} from "@/kt/stores/caprionStore";
import {useKtStore} from "@/kt/stores/ktStore";

const ktStore=useKtStore()

let captionStore = useCaptionStore()
let reasonTypes = ref([])
let reasonType = ref({})

captionStore.getReasonTypes().then(res => {
  reasonTypes.value = res
})

</script>

<template>
  <h3>Общая информация</h3>
  <div class="comm">
    <div class="reason row">
      <span class="label"><a>Повод</a></span>
      <el-select v-model="ktStore.kt.spnp.reasonType.id" filterable>
        <el-option
            v-for="item in reasonTypes"
            :key="item.id"
            :label="item.name"
            :value="item.id"
        />
      </el-select>
    </div>
    <div class="hand row">
      <span class="label"><a>Указать повод вручную</a></span>
      <el-input v-model="ktStore.kt.spnp.reasonText"/>
    </div>
    <div class="sps row">
      <span class="label sps_line"><a>Спецотметки</a></span>
      <el-input class="sps_line"/>
    </div>
    <div class="asc row">
      <el-button class="special-big">Опрос</el-button>
    </div>
  </div>

</template>

<style scoped>
.comm {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 100px;
  grid-template-areas: 'reason hand sps asc';
}

.reason {
  grid-area: reason;
}

.hand {
  grid-area: hand;
}

.sps {
  grid-area: sps;
}

.asc {
  grid-area: asc;
}

@media (width < 1200px) {
  .comm {
    grid-template-columns: 1fr 1fr 100px;
    grid-template-areas: 'reason hand asc' 'sps sps sps';
  }
}
</style>


