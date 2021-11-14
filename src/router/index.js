import { createRouter, createWebHistory } from "vue-router";
import MainScreen from "../pages/MainScreen.vue";
import About from "../pages/About.vue";
import Contacts from "../pages/Contacts.vue";

const routes = [
    {path: '/', component: MainScreen},
    {path: '/about', component: About},
    {path: '/contacts', component: Contacts}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;