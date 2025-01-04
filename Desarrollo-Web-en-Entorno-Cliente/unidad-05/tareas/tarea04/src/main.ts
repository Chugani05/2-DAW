import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css"
import './style.css';
import $ from 'jquery';


const app = createApp(App);
app.config.globalProperties.$ = $;
app.use(router);
app.mount('#app');
