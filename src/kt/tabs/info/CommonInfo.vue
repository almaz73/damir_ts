<template>
  <h3>Общая информация</h3>
  <div class="comm">
    <div class="reason row">
      <span class="label"><a>Повод</a></span>
      <el-select style="width:100%"/>
    </div>
    <div class="hand row">
      <span class="label"><a>Указать повод вручную</a></span>
      <el-input/>
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


