
import router from '@/router'

import Vue from 'vue'

import App from './App.vue'

new Vue({
    render: (h) => h(App),
    router,
}).$mount('#app')
