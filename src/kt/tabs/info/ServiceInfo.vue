<template>
  <div class="head-add">
    <h3>Информация об обслуживании</h3>
    <el-checkbox>Показать карту</el-checkbox>
  </div>
  <div class="row">
    <span class="label"><a>Номер вызова</a></span>
    <el-input/>
  </div>
  <div class="row">
    <span class="label"><a>Дата приема</a></span>
    <el-date-picker/>
  </div>
  <div class="row">
    <span class="label"><a>Время приема</a></span>
    <el-date-picker/>
  </div>
  <div class="row">
    <span class="label"><a>          Дата смены</a></span>


    <el-date-picker/>
  </div>
  <div class="table_service">
    <div class="col1">
      <div>Передача</div>
      <div>Выезд бригады</div>
      <div>Доезд</div>
      <div>Ожидание</div>
      <div>Начало транс</div>
      <div>Оконч. вызова</div>
      <div>Возврат на подст.</div>
    </div>
    <div class="col2">
      <div>08:01:13</div>
      <div>08:02:00</div>
      <div>08:30:00</div>
      <div>__:__:__</div>
      <div>__:__:__</div>
      <div>09:00:21</div>
      <div>09:25:00</div>
    </div>
    <div class="col3">
      <div>+39</div>
      <div>+1</div>
      <div>+28</div>
    </div>
    <div class="table_service__footer">
      <span>Затраченное время</span>
      <el-button>1 час 38 мин</el-button>
      <span></span>
      <img src="@/assets/img/editor.png"/>
    </div>

  </div>

  <div class="row">
    <span class="label"><a>Принял</a></span>
    <el-select/>
  </div>
  <div class="row">
    <span class="label"><a>Направил</a></span>
    <el-select/>
  </div>
  <div class="row">
    <span class="label"><a>Бригада</a></span>
    <el-select/>
  </div>
  <div class="row">
    <span class="label"><a>Старщий</a></span>
    <el-select/>
  </div>
  <div class="row">
    <span class="label"><a>Станция</a></span>
    <el-select/>
  </div>
</template>
<style>
.table_service {
  color: var(--black-text);
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-areas: 'col1 col2 col3' 'foot foot foot';
  border: 1px solid var(--el-border-color);
  border-radius: 5px;
  line-height: 30px;
  margin-bottom: 10px;
  font-size: 14px;
}

.col1, .col2 {
  border-right: 1px solid var(--el-border-color);
  padding: 10px;
}

.col3 {
  padding: 10px;
}

.table_service__footer {
  grid-area: foot;
  display: grid;
  grid-template-columns: 1fr 1fr 10% 20px;
  align-items: center;
  padding: 6px 10px;
  border-top: 1px solid var(--el-border-color);
}

.table_service__footer .el-button {
  background: #D8332E;
  color: white;
}

</style>
