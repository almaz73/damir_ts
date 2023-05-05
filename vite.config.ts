import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// можно переключаться на разные сайты, сайты должны быть авторизованы, чтобы получить с них данные
// const link = 'http://localhost:58080' // localhost
const link = 'http://192.168.83.53:8080' // мариэл
// const link = 'http://192.168.83.142:28080' // татарстан
// const link = 'http://192.168.83.120:28080/' // кемерова
// const link = 'http://192.168.83.138:28081/' // якутия
// const link = 'http://192.168.83.98:28080/' // калитнинград

export default defineConfig({
  plugins: [vue()],
  // develop: false, - поппытка исключить из продуктовой сборки папку develop, не проверено
  server: {
    port: 7777,
    proxy: {
      '/ambulance/': {
        target: link,
        ws: true,
        changeOrigin: true,
        withCredentials: true,
      },
      '/login': {
        target: link + '/ambulance',
        secure: false,
        changeOrigin: true
      },
      '/logout': {
        target: link + '/ambulance'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
})
