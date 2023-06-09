import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppMain from './pages/AppMain.vue';
import AppContact from './pages/AppContact.vue';
import SingleProject from './pages/SingleProject.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome

        },
        {
            path: '/contattami',
            name: 'contact',
            component: AppContact

        },
        {
            path: '/blog',
            name: 'blog',
            component: AppMain

        },
        {
            path: '/blog/:id',
            name: 'single-project',
            component: SingleProject

        },
    ]
});
export { router };