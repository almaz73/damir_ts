<template>
  <div class="root">
    <div class="active-fon"></div>
    <div class="autoriz">
      <h3>Авторизация</h3>
      <div class="autoriz-icon">
        <img src="../assets/img/systemL.png" height="82" width="84"/>
      </div>

      <div class="alert-danger" v-if="isErr">
        Пара логин-пароль не соответствует ни одному пользователю
      </div>

      <form>
        <p>
          <el-input v-model="login" autocomplete="off"  type="text" placeholder="Логин"/>
        </p>
        <p>
          <el-input v-model="password" type="password"  placeholder="Пароль" show-password/>
        </p>
        <button @click.stop.prevent="onSubmit()">Войти</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
let isErr = ref('false')
let password = ref('')
let login = ref('')

async function onSubmit() {
  let user = document.querySelector('[placeholder="Логин"]').value;
  let pass = document.querySelector('[placeholder="Пароль"]').value;
  let obj = `username=${user}&password=${pass}`;

  await axios.post('/ambulance/login', obj)
      .then(
          resp => {
            router.push({path: '/'});
            isErr.value = false;
          },
          err => {
            isErr.value = true;
          }
      );
}
</script>
<style>

.alert-danger {
  background-color: #f2dede;
  border-color: #ebccd1;
  color: #a94442;
  font-size: 14px;
  padding: 10px;
  margin-bottom: 20px;
}

.active-fon {
  position: absolute;
  background: url("../assets/images/autoriz/fonMap.jpg");
  opacity: 0.2;
  width: 100%;
  height: 100vh
}

.root {
  height: 100vh;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(243, 242, 243, 1) 100%);
}


.autoriz {
  top: calc(50% - 500px / 2);
  position: relative;
  margin: auto;
  width: 500px;
  background: #FFFFFF;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  padding: 25px;
}


.autoriz h3 {
  top: 0;
  position: relative;
  padding: 15px 25px 15px 25px;
  margin: -25px;
  background-color: #D2D5DA;
  color: #555;
  border: 0.5px solid #fff;
  margin-bottom: 35px;
  font-weight: 100;
  font-size: 22px;
  letter-spacing: 1px;
  border-radius: 6px 6px 0px 0px;
}

.autoriz-icon {
  position: absolute;
  top: -42px;
  left: calc(73%);
}

.autoriz-icon img {
  margin-top: 28px;
}

.autoriz label {
  line-height: 0px;
  font-size: 12px;
  color: #304FFE;
  position: absolute;
  margin: 10px 0 5px 0;
  z-index: 1;
}

.autoriz .el-input {
  margin-bottom: 10px;
  --el-input-height: 45px;
  --el-font-size-base: 16px;

}

.autoriz button {
  margin-top: 15px;
  background: #418BCA;
  border-radius: 6px;
  border: none;
  width: 100%;
  height: 40px;
  color: white;
  cursor: pointer;
  font-size: 18px;
}

.autoriz p {
  position: relative;
}

</style>
