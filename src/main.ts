import '@babel/polyfill'
import Vue, { CreateElement } from 'vue'

import App from './App'

new Vue({
    render: (h: CreateElement) => h(App)
})
.$mount('#app')
