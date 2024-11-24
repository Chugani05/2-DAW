import { createRouter, createWebHistory } from "vue-router";

import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
import Error404 from "./components/Error404.vue";

const routes = [
    { path: "/", redirect: "/about" },
    { path: "/about", component: About },
    { path: "/projects", component: Projects },
    { path: "/skills", component: Skills },
    { path: "/experience", component: Experience },
    { path: "/contact", component: Contact },
    { path: "/:pathMatch(.*)*", component: Error404 },
]


// Validar idioma y redirigir si no es válido
function validateLang(to, from, next) {
    const lang = to.params.lang;
    const supportedLanguages = ["en", "es"];
    if (!supportedLanguages.includes(lang)) {
        return next("/es/about");
    }
    next();
}
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;