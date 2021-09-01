<template>
  <div>
    <b-navbar class="shadow" toggleable="sm" type="light">
      <b-navbar-nav>
        <div>
          <b-navbar-toggle class="mr-1 toggle-button" target="sidebar"></b-navbar-toggle>
          <b-link to="/">
            <img alt="logo corregedoria" class="corregedoria-logo" src="https://i.imgur.com/CbTBSvh.png"
            >
          </b-link>
        </div>
        <!--        <b-button v-b-toggle.sidebar>Toggle Sidebar</b-button>-->
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <a href="https://www.tre-go.jus.br/">
          <img alt="Ir para a página do Tribunal Regional Eleitoral de Goiás " class="ml-auto tre-logo"
               src="http://www.tse.jus.br/temas/imagens/logos/tre-go.png">
        </a>
      </b-navbar-nav>

      <b-sidebar id="sidebar" sidebar-class="shadow text-center" title="Central de Sistemas">
        <nav class="mb-3">
          <b-link class="d-flex justify-content-center pb-4" to="/">
            <img alt="" src="https://i.imgur.com/CbTBSvh.png" style="width: 120px;">
          </b-link>
          <b-nav vertical>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/sisbajud"><img
                alt="Sistema de Busca de Ativos do Poder Judiciário" class="nav-logo" src="@/assets/png/113-tie.png">
              SISBAJUD
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/infojud"><img
                alt="Sistema de Informações ao Judiciário" class="nav-logo"
                src="@/assets/png/111-goal.png"> INFOJUD
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/renajud"><img
                alt="Sistema de Restrições Judiciais sobre Veículos Automotores" class="nav-logo"
                src="@/assets/png/car.png">
              RENAJUD
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/serasajud"><img
                alt="SERASAJUD" class="nav-logo" src="@/assets/png/funding.png">
              SERASAJUD
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/bnmp"><img
                alt="Banco Nacional de Monitoramento de Prisões" class="nav-logo" src="@/assets/png/arrest.png">
              BNMP
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/bancoperitos"><img
                alt="Banco de Peritos" class="nav-logo" src="@/assets/png/riot-police.png">
              BANCO PERITOS
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/seeu"><img
                alt="Sistema Eletrônico de Execução Unificado" class="nav-logo" src="@/assets/png/document.png">
              SEEU
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/sicel"><img
                alt="Sistema de Inspeções e Correições Eleitorais" class="nav-logo"
                src="@/assets/png/police-station.png">
              SICEL
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/sinic"><img
                alt="Sistema Nacional de Informações Criminais da Polícia Federal" class="nav-logo"
                src="@/assets/png/protection.png">
              SINIC
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/sgt"><img
                alt="Sistema de Gestão de Tabelas Processuais Unificadas" class="nav-logo" src="@/assets/png/law.png">
              SGT
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/justifica"><img
                alt="Justifica" class="nav-logo" src="@/assets/png/smartphone.png">
              JUSTIFICA
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/infodip"><img
                alt="Infodip" class="nav-logo" src="@/assets/png/report.png">
              INFODIP
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/siel"><img
                alt="Siel" class="nav-logo" src="@/assets/png/web.png">
              SIEL
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/pje1g"><img
                alt="PJE1G" class="nav-logo" src="@/assets/png/pje.png">
              PJE 1G
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/pje2g"><img
                alt="PJE1G" class="nav-logo" src="@/assets/png/pje.png">
              PJE 2G
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/pjecor"><img
                alt="Processo Judicial Eletrônico das Corregedorias" class="nav-logo"
                src="@/assets/png/certificate.png">
              PJECOR
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/sei"><img
                alt="Processo Judicial Eletrônico das Corregedorias" class="nav-logo" src="@/assets/png/sei.png">
              SEI!
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/pad"><img
                alt="Processo Judicial Eletrônico das Corregedorias" class="nav-logo" src="@/assets/png/timeline.png">
              PAD
            </b-link>
          </b-nav>
          <!--          <b-button variant="primary">Close Sidebar</b-button>-->
        </nav>

      </b-sidebar>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {}
  },


}
</script>

<style>
#sidebar {
  transition: 0.3s;
  background-color: #FFFFFF !important;

}

#sidebar a {
  color: darkblue;
}

.toggle-button {
  transition: 0.5s;
}

.toggle-button:hover {
  background-color: lightgrey;
}

.nav-logo {
  width: 40px;
  margin-right: 10px;
  /*display: inline;*/
}

.corregedoria-logo {
  width: 120px;
  margin-left: 65px
}

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
  .corregedoria-logo {
    width: 100px;
    margin-left: 0;
  }

  .tre-logo {
    width: 100px;
  }

}
</style>
