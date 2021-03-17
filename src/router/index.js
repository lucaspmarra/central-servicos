import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import SistemasPatrimoniais from "@/views/sistemas-patrimoniais/SistemasPatrimoniais";
import Sisbajud from "@/views/sistemas-patrimoniais/Sisbajud";
import Infojud from "@/views/sistemas-patrimoniais/Infojud";
import Serasajud from "@/views/sistemas-patrimoniais/Serasajud";
import Renajud from "@/views/sistemas-patrimoniais/Renajud";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sistemas-patrimoniais',
        name: 'Sistemas Patrimoniais',
        component: SistemasPatrimoniais,
        children: [{
            // path: '',
            path: 'sisbajud',
            name: 'Sisbajud',
            component: Sisbajud
        },
            {
                // path: '',
                path: 'infojud',
                name: 'Infojud',
                component: Infojud
            },
            {
                // path: '',
                path: 'renajud',
                name: 'Renajud',
                component: Renajud
            },
            {
                // path: '',
                path: 'serasajud',
                name: 'Serasajud',
                component: Serasajud
            }]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
