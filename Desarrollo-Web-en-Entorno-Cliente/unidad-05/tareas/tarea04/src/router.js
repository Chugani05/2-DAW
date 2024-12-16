import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue"
import Ejercicio1 from "./components/Ejercicio1.vue";
import Ejercicio2 from "./components/Ejercicio2.vue";
import Ejercicio3 from "./components/Ejercicio3.vue";
import Error404 from "./components/Error404.vue";

const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/elige-a-tu-pennywise", component: Ejercicio1 },
    { path: "/la-casa-flotante-de-los-globos-ojos", component: Ejercicio2 },
    { path: "/la-maldicion-de-derry", component: Ejercicio3 },
    { path: "/:pathMatch(.*)*", component: Error404 },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;