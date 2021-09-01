import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueAnalytics from 'vue-analytics';
/*
Import do Bootstrap css
Pode usar Bootstrap <https://getbootstrap.com/> ou VueBootstrap <https://bootstrap-vue.org/>
*/
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
    id: 'G-JDH7J2XZ7F',
    router
});

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
