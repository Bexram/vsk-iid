import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes,
    // eslint-disable-next-line
    // scrollBehavior(to, from, savedPosition) {
    //     return { x: 0, y: 0 }
    // }

})

Vue.config.productionTip = false

export default router
