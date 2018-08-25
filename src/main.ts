import Vue, { CreateElement } from 'vue'
import '@babel/polyfill'

import App from './App'

new Vue({
    render: (h: CreateElement) => h(App)
})
.$mount('#app')
