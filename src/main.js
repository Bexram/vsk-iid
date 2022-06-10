
import router from '@/router'

import Vue from 'vue'
import store from '@/store'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueSmoothScroll from 'vue2-smooth-scroll'
new Vue({
    render: (h) => h(App),
    vuetify,
    router,
    store,
    VueSmoothScroll
}).$mount('#app')
