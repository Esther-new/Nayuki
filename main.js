import Vue from 'vue'
import App from './App'
import api from './api'
import util from './common/util'

Vue.config.productionTip = false


App.mpType = 'app'

Vue.prototype.$api = api
Vue.prototype.$util = util

const app = new Vue({
    ...App
})
app.$mount()
