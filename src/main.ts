import {createApp} from 'vue'
import {createPinia} from 'pinia'
import ElementPlus from 'element-plus'
import ru from 'element-plus/dist/locale/ru.min.mjs'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import './assets/css/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus, {locale: ru})
app.use(router)

app.mount('#app')
