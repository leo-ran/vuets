import '@babel/polyfill'
import Vue, { CreateElement } from 'vue'

import App from './App'

import store from './store';
import router from '@/router'

new Vue({
    store,
    router,
    render: (h: CreateElement) => h(App)
})
.$mount('#app')
