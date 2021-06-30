import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@app/views/Home.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    }
]

const router = new VueRouter({
    mode: "history",
    //eslint-disable-next-line no-process-env,no-undef
    base: process.env.BASE_URL,
    routes
})

export default router
