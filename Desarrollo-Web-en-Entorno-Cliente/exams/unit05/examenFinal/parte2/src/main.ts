import '/src/styles/bootstrap/css/bootstrap.min.css'
import { createApp } from 'vue'
import i18n from '../i18n'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

const pinia = createPinia()

createApp(App).use(pinia).use(i18n).use(router).mount('#app')
