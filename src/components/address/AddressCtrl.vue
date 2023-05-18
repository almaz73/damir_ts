<script setup lang="ts">
// @ts-ignore
import {ref} from 'vue';
// @ts-ignore
import * as vm from '././callPlace.js'
import {useKtStore} from "@/kt/stores/ktStore";

let ktStore = useKtStore()

let objectId // = serverResponse.address.cityAddress.location.objectId


let callPlaces = ref([]);
let callPlace = ref(null)
let regions = ref([])
let region = ref(null)
let mos = ref([])
let mo = ref(null)
let nps = ref([])
let np = ref(null)
let streets = ref([])
let street = ref(null)
let houses = ref([])
let house = ref(null)
let address: object;
let isAddress = false


// Если есть адрес получаем все узлы
if (objectId) {
  addressStore.getFullPathLocation(objectId)
      .then((res: any) => {
        console.log('------- ---- res', res);
         setAddress(res);
      })
  isAddress = true
}


// function getFullPathLocation(aoId: any) {
//   addressStore.getFullPathLocation(aoId)
//       .then(function (data: string | any[]) {
//         setAddress(data);
//       });
// }

// установить адрес
function setAddress(fullPath: any[]) {
  let region_ = fullPath[0],
      mo_ = fullPath.length > 1 && [2, 4, 5,].indexOf(fullPath[1].lev) > -1 ? fullPath[1] : null,
      np_ = fullPath.length > 1 && [2, 4, 5].indexOf(fullPath[1].lev) == -1 && [14, 6, 7].indexOf(fullPath[1].lev) > -1 ? fullPath[1] : null,
      street_ = fullPath.length > 1 && [2, 4, 5, 14, 6, 7].indexOf(fullPath[1].lev) == -1 ? fullPath[1] : null;

  let house_;



  // region.value = region_

  // if (!address) {
  //   address = {};
  // }
  //
  // if (!address['cityAddress']) {
  //   address['cityAddress'] = {};
  // }
  // address['cityAddress']['region'] = region;
  // region.value && getMOs(region.value, mo.value);

  for (let i = 2; i < fullPath.length; i++) {
    let path = fullPath[i];

    if (path.lev == 8) {
      street = path;
    } else {
      np = path;
    }
  }

  console.log('..::region', region_);
  console.log('..::mo', mo_);
  console.log('..::np', np_);
  console.log('..::street', street_);


  getNPs(mo_ || region_, np_);
  getStreets(np_ || mo_ || region_, street_);
  getHouses(street_|| np_ || mo_ || region_, house_, true);

  if (street_) streetChange(street_);
  else if (np_) npChange(np_);
  else if (mo_) npChange(mo_);
  else if (region_) {
    regionChange(region_);
    //vm.localRegionName = region.showText.split(' ')[0]
  }
}

// типы
ktStore.getCallPlaces().then((res: object) => callPlaces.value = res)

// местный регион
function getCurrentRegion() {
  ktStore.getCurrentRegion().then((res: any) => {
    region.value = res.objectId
    region.value && getMOs(region.value)
  })
}

// все регионы
ktStore.getRegions().then((res: number) => {
  regions.value = res
  if(!isAddress) getCurrentRegion()
})

function regionChange() {
  mo.value = null
  np.value = null
  street.value = null

  getMOs(region.value);
  getNPs(region.value);
  getStreets(region.value);
  getHouses(region.value);


  // address['cityAddress']['location'] = region;
  if (vm.addressChange) {
    vm.addressChange('region', region.value);
  }
}

// мунициальные обьединения
function getMOs(id: number, np_: number) {
  street.value = null
  np.value = null
  ktStore.getMOs(id).then((res: number) => mos.value = res)
}

!isAddress && ktStore.getCurrentMO().then((res: any) => {
  mo.value = res.objectId
  getNPs(mo.value)
  getStreets(mo.value);
})

function moChange() {
  street.value = null
  getNPs(mo.value)
  getStreets(mo.value);
  getHouses(mo.value);
}


// Населенные пункты
function getNPs(id: number) {
  street.value = null
  ktStore.getNPs(id).then((res: number) => nps.value = res)
}

function npChange() {
  street.value = null
  getStreets(np.value)
}

// улицы
function getStreets(id: number) {
  ktStore.getStreets(id).then((res: number) => streets.value = res)
}

function streetChange() {
  console.log('streetChange',);
  getHouses(street.value)
}

//номера домов
function getHouses(id: number) {
  console.log('id', id);
  ktStore.getHouses(id).then((res: number) => {
    console.log('res', res);
    houses.value = res
  })
}

function houseChange() {
  console.log('houseChange',);
}


</script>
<template>
  <div style="margin-top: 10px">
    <div class="row">
      <span class="label"><a>Тип</a></span>
      <el-select v-model="callPlace" style="width:100%" filterable>
        <el-option
            v-for="item in callPlaces"
            :key="item.id"
            :label="item.name"
            :value="item.id"
        />
      </el-select>

      <span class="label"><a>Объект</a></span>
      <el-select style="width:100%"/>
    </div>
    <div class="row">
      <span class="label"><a>Регион</a></span>
      <el-select
          filterable
          v-model="region"
          @change="regionChange()"
          style="width:100%">
        <el-option
            v-for="item in regions"
            :key="item.objectId"
            :label="item.showText"
            :value="item.objectId"
        ></el-option>
      </el-select>

      <span class="label"><a>Улица</a></span>
      <el-select
          filterable
          v-model="street"
          @change="streetChange()"
          style="width:100%">
        <el-option
            v-for="item in streets"
            :key="item.objectId"
            :label="item.showText"
            :value="item.objectId">
        </el-option>
      </el-select>
    </div>
    <div class="row">
      <span class="label"><a>Мо</a></span>
      <el-select
          filterable
          v-model="mo"
          @change="moChange()"
          style="width:100%">
        <el-option
            v-for="item in mos"
            :key="item.objectId"
            :label="item.showText"
            :value="item.objectId"
        ></el-option>
      </el-select>

      <span class="label"><a>Дом</a></span>
      <el-select
          filterable
          v-model="house"
          @change="houseChange()"
          style="width:100%">
        <el-option
            v-for="item in houses"
            :key="item.houseId"
            :label="item.showText"
            :value="item.houseId"
        ></el-option>
      </el-select>
      <span class="label"><a>Корпус</a></span>
      <el-input/>
      <span class="label"><a>Строение</a></span>
      <el-input/>
      <span class="label"><a>Квартира</a></span>
      <el-input/>
    </div>
    <div class="row">
      <span class="label"><a>НП</a></span>
      <el-select
          filterable
          v-model="np"
          style="width:100%"
          @change="npChange()"
      >
        <el-option
            v-for="item in nps"
            :key="item.objectId"
            :label="item.showText"
            :value="item.objectId"
        ></el-option>
      </el-select>

      <span class="label"><a>Подъезд</a></span>
      <el-input/>
      <span class="label"><a>Этаж</a></span>
      <el-input/>
      <span class="label"><a>Домофон</a></span>
      <el-input/>
    </div>
  </div>
</template>
