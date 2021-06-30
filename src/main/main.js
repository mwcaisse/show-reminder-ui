import Vue from "vue"
import App from "@app/App.vue"
import router from "@app/router"

//Import bulma
import "bulma/css/bulma.min.css"

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")
