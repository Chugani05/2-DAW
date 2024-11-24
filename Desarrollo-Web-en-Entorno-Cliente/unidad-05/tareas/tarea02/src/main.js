import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style.css';
import i18n from "./i18n";


const app = createApp(App);
app.use(router);
app.use(i18n);
createApp(App).mount('#app');
