<script setup>
import {useKtStore} from "@/kt/stores/ktStore";
import {ref} from "vue";

const ktStore = useKtStore()

const MIN_LENGTH = 3;
let currentObjectId;
let local = true
let myHouses = [];
let newAddress = ref([])
let forseRenderer = ref(0)
let likeWorld = ref('')
let searchList = []

let myChilds = []
let levels = []
let isDirty = false
let once = false


// отображение сохраненного вызова
function shoeSavedAddress(cityAddress) {
  isDirty = false
  if (cityAddress) {
    if (cityAddress.location) setAddressChain(cityAddress.location.objectId)

    if (cityAddress.house) { // подставляем номер дома
      let house = cityAddress.house;
      cityAddress.house.fullname = "дом " + cityAddress.house.showText;


      if (!once) addHouse(house)
      once = true
    }

  } else {
    ktStore.getDefaultLocation().then(data => {
      if (data.objectId) setAddressChain(data.objectId)
      else console.warn('.... Нет данных по умолчанию');
    });
  }
}

shoeSavedAddress(ktStore.kt.address.cityAddress)


/*function nnnn() {
  ktStore.getDefaultLocation().then(data => {
    if (data.objectId) setAddressChain(data.objectId)
  });
}*/

function addHouse(house) {
  if (newAddress.length) newAddress.push(house)
  // else setTimeout(() => addHouse(house), 100)
}


// разбивает адресную цепочку на кнопки
function setAddressChain(objectId) {
  getChilds(objectId)
  ktStore.getFullPathLocation(objectId)
      .then(res => {
            newAddress = [];

            res.forEach(el => {
              el.fullname = el.showText
              newAddress.push(el)
            })
            //    if (isDirty) vm.$parent.commandFromAddressLine(res) ??
            levels = newAddress.map(el => el.lev)

            // console.log("newAddress", newAddress)
            // console.log("levels", levels)
            forseRenderer.value++;
          },
          err => console.log('err', err))
}

function getChilds(objectId) {
  ktStore.getAddressChilds(objectId)
      .then(res => myChilds = res)

  // !myChilds.lenght && ktStore.getHouses(objectId)
  //     .then(data => myHouses = data);
}

// Удаление узла, обновление полей
function removeTag(tag) {
  console.log("tag", tag)
  if (local && tag.lev === 1) return false // не позволяет удалить локальный

  newAddress = newAddress.filter(el => el.lev < tag.lev)
  levels = newAddress.map(el => el.lev)
  forseRenderer.value++;
}

let timerInput; // чтобы задержать вызов к серверу, если пользователь продолжает ввод данных
let abortController; // чтобы отменить вызов
function loadAddress(like, cb) {
  if (searchList.value && searchList.value.length) {
    // ищем в найденных, чтобы не обращаться к серверу
    let exist = searchList.value.filter(el => el.fullname.toUpperCase().includes(like.toUpperCase()))
    if (exist.length) return cb(exist)
  }

  isDirty = true;
  let memoryAddress = uniqum(filterSearch(like));
  if (like.length < MIN_LENGTH || memoryAddress.length) return memoryAddress
  getCurrentObjectId();
  if (timerInput) clearTimeout(timerInput)
  timerInput = setTimeout(() => {
    if (abortController) abortController.abort() //Предыдущий запрос отклонён
    abortController = new AbortController(); // механизм отмены предыдущего запроса
    currentObjectId = null

    return ktStore.searchAddress(like, currentObjectId, abortController)
        .then(function (res) {
          res = uniqum(res);
          searchList.value = uniqum(res)
          if (!searchList.value.length) return cb([])
          searchList.value.map(el => el.value = el.fullname)
          cb(searchList.value)
        })
  }, 800)
}

function getCurrentObjectId() {
  let regionObjectId = ktStore.kt.address.cityAddress.region && ktStore.kt.address.cityAddress.region.objectId;
  // console.log("regionObjectId", regionObjectId)
  if (!newAddress.length) currentObjectId = vm.local ? regionObjectId : null;

  // console.log("currentObjectId", currentObjectId)

  if (newAddress.length) {
    currentObjectId = newAddress[newAddress.length - 1].objectId;
  }

  // console.log("222 currentObjectId", currentObjectId)
}


function filterSearch(like) {
  if (!newAddress.length && regions) {
    return regions.filter(el => {
      if (like && !el.showText.toUpperCase().includes(like.toUpperCase())) return false
      return el
    });
  }

  if (myChilds.length) {
    let count = 0;

    return myChilds.filter(el => {
      if (!el.showText.toUpperCase().includes(like.toUpperCase())) return false
      if (count > 16) return false; // отдаем только первые 16
      count++;
      el.fullname = el.showText
      return el
    });
  }

  if (myHouses.length) {
    let count = 0;
    return myHouses.filter(el => {
      if (!el.showText.includes(like)) return false
      if (count > 16) return false; // отдаем только первые 16
      count++;
      el.fullname = "дом " + el.showText;
      el.objectId = count;
      return el
    });
  }

  return []
}

function tagAdded() {
  setTimeout(() => {
    let obj = searchList.value.find(el => el.fullname === likeWorld.value)
    setAddressChain(obj.objectId)
  }, 400)

  // if (obj.houseNum) { ??
  //   setTimeout(() => {
  //     let house = vm.newAddress[vm.newAddress.length - 1]
  //     vm.newAddress = vm.newAddress.filter(el => !el.houseId)
  //     vm.newAddress.push(house)
  //   });
  //
  //   vm.address.cityAddress.houseNum = obj.houseNum;
  //   vm.address.cityAddress.buildNum = obj.buildNum;
  //   vm.address.cityAddress.houseId = obj.houseId;
  //
  //   if (isDirty) vm.$parent.commandFromAddressLine(obj.showText)
  //   return
  // }

}


// удаляем дубликаты
function uniqum(res) {
  if (!res) return false
  return res.length && res.filter((thing, index, self) => index === self.findIndex(t => t.objectId === thing.objectId))
}

</script>

<template>
  <div class="area" :key="forseRenderer">
    <el-button v-for="addr in newAddress" :key="addr.lev">{{ addr.showText }}
      <button @click.stop="removeTag(addr)">×</button>
    </el-button>

    <el-autocomplete
        style="width: 73%;  min-width: 400px;  padding: 0 4px;"
        v-model="likeWorld"
        :fetch-suggestions="loadAddress"
        @change="tagAdded(likeWorld)"
        placeholder="Введите адрес"
        :clearable="true"
        :trigger-on-focus="false"
    ></el-autocomplete>
  </div>
</template>

<style scoped>

.area {
  border: 1px solid #ddd;
  flex-wrap: wrap;
  display: flex;
}
</style>
