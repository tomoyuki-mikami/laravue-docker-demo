import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import vuetify from './plugins/vuetify'
import router from './router'
import App from './components/App.vue'

Vue.use(VueCompositionApi)
Vue.config.productionTip = false

new Vue({
    router,
    vuetify: vuetify,
    render: (h) => h(App)
}).$mount('#app')
