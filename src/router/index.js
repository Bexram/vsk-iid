import { createWebHistory, createRouter } from "vue-router";
import routes from './routes'
/* eslint-disable */

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});


export default router
