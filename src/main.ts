import '@babel/polyfill'
import Vue, { CreateElement } from 'vue'

import App from './App'

import store from './store';

new Vue({
    store,
    render: (h: CreateElement) => h(App)
})
.$mount('#app')
