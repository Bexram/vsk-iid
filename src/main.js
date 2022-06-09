
import router from '@/router'

import Vue from 'vue'
import store from '@/store'
import App from './App.vue'
import vuetify from './plugins/vuetify'

new Vue({
    render: (h) => h(App),
    vuetify,
    router,
    store
}).$mount('#app')
