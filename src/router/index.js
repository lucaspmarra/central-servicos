import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import SistemasPatrimoniais from "@/views/sistemas-patrimoniais/SistemasPatrimoniais";
import SistemasApoioJurisdicao from "@/views/sistemas-apoio-jurisdicao/SistemasApoioJurisdicao";
import Sisbajud from "@/views/sistemas-patrimoniais/Sisbajud";
import Infojud from "@/views/sistemas-patrimoniais/Infojud";
import Serasajud from "@/views/sistemas-patrimoniais/Serasajud";
import Renajud from "@/views/sistemas-patrimoniais/Renajud";
import Navegacao from "@/views/sistemas-patrimoniais/Navegacao";
import Bnmp from "@/views/sistemas-apoio-jurisdicao/Bnmp";
import Sinic from "@/views/sistemas-apoio-jurisdicao/Sinic";
import Seeu from "@/views/sistemas-apoio-jurisdicao/Seeu";
import Sgt from "@/views/sistemas-apoio-jurisdicao/Sgt";
import Sicel from "@/views/sistemas-apoio-jurisdicao/Sicel";
import BancoPeritos from "@/views/sistemas-apoio-jurisdicao/BancoPeritos";
import Justifica from "@/views/sistemas-cadastro-eleitoral/Justifica";
import SistemasCadastroEleitoral from "@/views/sistemas-cadastro-eleitoral/SistemasCadastroEleitoral";
import Siel from "@/views/sistemas-cadastro-eleitoral/Siel";
import Elo from "@/views/sistemas-cadastro-eleitoral/Elo";
import Infodip from "@/views/sistemas-cadastro-eleitoral/Infodip";
import Pje1g from "@/views/sistemas-processuais/Pje1g";
import Pje2g from "@/views/sistemas-processuais/Pje2g";
import Pjecor from "@/views/sistemas-processuais/Pjecor";
import Pad from "@/views/sistemas-processuais/Pad";
import Sei from "@/views/sistemas-processuais/Sei";
import SistemasProcessuais from "@/views/sistemas-processuais/SistemasProcessuais";


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
    },
    {
        path: '/sistemas-apoio-jurisdicao',
        name: 'Sistemas de Apoio à Jurisdição',
        component: SistemasApoioJurisdicao
    },
    {
        path: '/sistemas-cadastro-eleitoral',
        name: 'Sistemas Relacionados ao Cadastro Eleitoral',
        component: SistemasCadastroEleitoral
    }, {
        path: '/sistemas-processuais',
        name: 'Sistemas Processuais',
        component: SistemasProcessuais
    },
    {
        path: '/navegacao',
        name: 'Navegação',
        component: Navegacao,
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
            },
            {
                path: 'bnmp',
                name: 'Banco Nacional de Monitoramento de Prisões',
                component: Bnmp
            }, {
                path: 'sinic',
                name: 'Sistema Nacional de Informações Criminais da Polícia Federal',
                component: Sinic
            }, {
                path: 'seeu',
                name: 'Sistema Eletrônico de Execução Unificado',
                component: Seeu
            }, {
                path: 'sgt',
                name: 'Sistema de Gestão de Tabelas Processuais Unificadas',
                component: Sgt
            }, {
                path: 'sicel',
                name: 'Sistema de Inspeções e Correições Eleitorais',
                component: Sicel
            }, {
                path: 'bancoperitos',
                name: 'Banco de Peritos',
                component: BancoPeritos
            }, {
                path: 'justifica',
                name: 'Justifica',
                component: Justifica
            }, {
                path: 'infodip',
                name: 'Infodip',
                component: Infodip
            },
            {
                path: 'elo',
                name: 'Elo',
                component: Elo
            },
            {
                path: 'siel',
                name: 'Siel',
                component: Siel
            }, {
                path: 'pje1g',
                name: 'Pje1G',
                component: Pje1g
            }, {
                path: 'pje2g',
                name: 'Pje2G',
                component: Pje2g
            },
            {
                path: 'pjecor',
                name: 'PjeCor',
                component: Pjecor
            },
            {
                path: 'pad',
                name: 'Pad',
                component: Pad
            },
            {
                path: 'sei',
                name: 'Sei',
                component: Sei
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
