import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css"
import './style.css';


const app = createApp(App);
app.use(router);
app.mount('#app');
