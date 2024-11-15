import { createRouter, createWebHistory } from "vue-routes";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
import Error404 from "./components/Error404.vue";

const routes = [
    { path: "/", redirect: "/about" },
    { path: "/about", compnent: About },
    { path: "/projects", compnent: Projects },
    { path: "/skills", compnent: Skills },
    { path: "/experience", compnent: Experience },
    { path: "/contact", compnent: Contact },
    { path: "/:pathMatch(.*)*", compnent: Error404 },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;