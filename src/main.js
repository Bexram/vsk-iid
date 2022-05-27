import { createApp } from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'vue3-smooth-scroll'
import router from './router'
createApp(App).use(VueSmoothScroll).use(router).mount('#app')
