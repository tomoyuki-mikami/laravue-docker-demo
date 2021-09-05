import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Top from "./components/Top.vue"
import Example1 from "./components/Example1.vue"
import Example2 from "./components/Example2.vue"

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Top, name: 'top' },
        { path: '/example1', component: Example1, name: 'example1' },
        { path: '/example2', component: Example2, name: 'example2' },
    ]
})
