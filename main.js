import Vue from 'vue'
import App from './App'
import api from './api'
import util from './common/util'
import store from './store/store'

Vue.config.productionTip = false


App.mpType = 'app'

Vue.prototype.$api = api
Vue.prototype.$util = util
Vue.prototype.$store = store

const app = new Vue({
    ...App
})
app.$mount()
