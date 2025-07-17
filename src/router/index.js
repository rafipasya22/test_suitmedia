import { createRouter, createWebHistory } from "vue-router";
import Home from "../Home.vue";
import Work from "../Work.vue";
import Services from "../Services.vue";
import Contact from "../Contact.vue";
import Careers from "../Careers.vue";
import About from "../About.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/work',
        name: 'work',
        component: Work
    },
    {
        path: '/services',
        name: 'services',
        component: Services
    },
    {
        path: '/careers',
        name: 'careers',
        component: Careers
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory('/test_suitmedia/'),
    routes,
})

export default router