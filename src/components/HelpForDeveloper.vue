<template>
  <div class="links">
    <a target="_blank" href="https://element-plus.org/en-US/component/button.html">https://element-plus.org</a> |
    <a target="_blank"
       href="https://www.figma.com/file/WmV8FxlinHsseOhJjsUgTh/%D0%94%D0%B8%D1%81%D0%BF%D0%B5%D1%82%D1%87%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F-%E2%80%94-%D1%81%D0%BA%D0%BE%D1%80%D0%B0%D1%8F-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C?node-id=294%3A37815">Фигма</a>

  </div>
  <div>
    <h2>Разработчику</h2>
    <ul>
      <li>В проекте используется Pinia - как единый центр хранения данных.</li>
      <li>VUE Router - позволит к страницам обращаться по адресной ссылке, помнить историю
        посещений (одностраничный сайт)
      </li>
      <li>Библиотека Element Plus предоставляет все контролы - таблицы, кнопки, комбобоксы и т.д. Он будет
        костомизирован под наш дизайн
      </li>
    </ul>

    <h4>Костомизация Element Plus</h4>
    <table class="table" cellspacing="0" cellpadding="5">
      <tr>
        <th> Было</th>
        <th> Стало</th>
      </tr>
      <tr>
        <td>
          <el-input placeholder="label" v-model="inp1"/>
          <code id="b1"/>
        </td>
        <td class="custom">
          <div class="g-row">
            <span class="label">Label</span>
            <el-input v-model="inp1"/>
          </div>
          * placeholder заменен на label<br>
          <code id="b1_"/>
        </td>
      </tr>
      <tr>
        <td>
          <el-select v-model="select1">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>

        </td>
        <td class="custom">
          <div class="g-row" style="justify-content:inherit">
            <span class="label">Фамилия</span>
            <el-select v-model="select1">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>

          </div>

        </td>
      </tr>
      <tr>
        <td>

          <el-date-picker
              v-model="date1"
              type="date"
              style="min-width: 160px"
          />
        </td>
        <td class="custom">
          <div class="g-row" style="justify-content:inherit">
            <span class="label">&nbsp; &nbsp; &nbsp; Дата рождения</span>
            <el-date-picker
                v-model="date1"
                type="date"
                style="min-width: 160px"
            />
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <el-checkbox label='Checkbox'/>
        </td>
        <td class="custom">
          <el-checkbox label='Checkbox'/>
        </td>
      </tr>

      <tr>
        <td>
          <el-button type="primary">No</el-button>
          <el-button>Ок</el-button>
          <el-button type="success">Success</el-button>
        </td>
        <td class="custom">
          <el-button type="primary">No</el-button>
          <el-button>Ок</el-button>
          <el-button type="success">Success</el-button>
        </td>
      </tr>
    </table>

    <!--    <h3>-->
    <!--      Как работают модальные окна:-->
    <!--    </h3>-->
    <!--    <p>Они независимы от родителей, но зависят от местоположения откуда открываются.</p>-->
    <!--    <p>Для модалок важен параметр name. Чтобы открывать модалку, создается событие (EventBus), и каждая модалка слушает,-->
    <!--      не её ли имя прозвучало.</p>-->
    <!--    <p>Наряду с eventBus можно передать callback-функцию и получить ответ от модалки с результатами</p>-->
    <!--    <p>Чтобы создать новую модалку, достаточно копипастить например ToPrint_Modal.vue и дать названию файла и параметру name-->
    <!--      новое имя.</p>-->
    <!--    <p>Внутри ModalWrapper параметры костомизации, можно изменить: ширину ,высоту, смещение сверху, кнопки (например yes/no), позиционирование кнопок</p>-->

  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";

let inp1 = ref('')
let date1 = ref(new Date())
let login = ref('')
let options = ref([{value: 'Option1', label: 'Выберите образование'}, {value: 'Option2', label: 'Option2'}])
let select1 = ref({})

onMounted(() => {
  document.querySelector('#b1').innerText = `<el-input label="Label"/>`
  document.querySelector('#b1_').innerText = `<span class="label">Label</span>\n<el-input/>`
})
</script>
<style scoped>
.links {
  text-align: center;
}

.div {
  padding: 16px 36px;
}

.ready {
  text-decoration: line-through;
}

.table {
  border-collapse: collapse;
  width: 1000px;
}

.table td, .table th {
  width: 50%;
  padding: 0 20px;
  border: 1px solid #bbb;
}

code {
  color: #999;
}
</style>
