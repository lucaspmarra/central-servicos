<template>
  <div>
    <b-navbar type="light" class="shadow" toggleable="sm">
      <b-navbar-nav>
        <div>
          <b-navbar-toggle target="sidebar" class="mr-1 toggle-button"></b-navbar-toggle>
          <b-link to="/">
            <img src="https://i.imgur.com/CbTBSvh.png" alt="" style="width: 120px; margin-left: 65px">
          </b-link>
        </div>
        <!--        <b-button v-b-toggle.sidebar>Toggle Sidebar</b-button>-->
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <a href="https://www.tre-go.jus.br/">
          <img class="ml-auto" src="http://www.tse.jus.br/temas/imagens/logos/tre-go.png" alt="logo tre">
        </a>
      </b-navbar-nav>

      <b-sidebar id="sidebar" sidebar-class="shadow text-center" title="Central de Sistemas">
        <nav class="mb-3">
          <b-link to="/" class="d-flex justify-content-center pb-4">
            <img src="https://i.imgur.com/CbTBSvh.png" alt="" style="width: 120px;">
          </b-link>
          <b-nav vertical>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/sisbajud"><img
                src="@/assets/png/113-tie.png" alt="Sistema de Busca de Ativos do Poder Judiciário" class="nav-logo">
              SISBAJUD
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/infojud"><img
                src="@/assets/png/111-goal.png" alt="Sistema de Informações ao Judiciário"
                class="nav-logo"> INFOJUD
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/renajud"><img
                src="@/assets/png/car.png" alt="Sistema de Restrições Judiciais sobre Veículos Automotores"
                class="nav-logo">
              RENAJUD
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/serasajud"><img
                src="@/assets/png/funding.png" alt="SERASAJUD" class="nav-logo">
              SERASAJUD
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/bnmp"><img
                src="@/assets/png/arrest.png" alt="Banco Nacional de Monitoramento de Prisões" class="nav-logo">
              BNMP
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/bancoperitos"><img
                src="@/assets/png/riot-police.png" alt="Banco de Peritos" class="nav-logo">
              BANCO PERITOS
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/seeu"><img
                src="@/assets/png/document.png" alt="Sistema Eletrônico de Execução Unificado" class="nav-logo">
              SEEU
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/sicel"><img
                src="@/assets/png/police-station.png" alt="Sistema de Inspeções e Correições Eleitorais" class="nav-logo">
              SICEL
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/sinic"><img
                src="@/assets/png/protection.png" alt="Sistema Nacional de Informações Criminais da Polícia Federal"
                class="nav-logo">
              SINIC
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/sgt"><img
                src="@/assets/png/law.png" alt="Sistema de Gestão de Tabelas Processuais Unificadas" class="nav-logo">
              SGT
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/justifica"><img
                src="@/assets/png/smartphone.png" alt="Justifica" class="nav-logo">
              JUSTIFICA
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/infodip"><img
                src="@/assets/png/report.png" alt="Infodip" class="nav-logo">
              INFODIP
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/siel"><img
                src="@/assets/png/web.png" alt="Siel" class="nav-logo">
              SIEL
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/pje1g"><img
                src="@/assets/png/pje.png" alt="PJE1G" class="nav-logo">
              PJE 1G
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/pje2g"><img
                src="@/assets/png/pje.png" alt="PJE1G" class="nav-logo">
              PJE 2G
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/pjecor"><img
                src="@/assets/png/certificate.png" alt="Processo Judicial Eletrônico das Corregedorias" class="nav-logo">
              PJECOR
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/sei"><img
                src="@/assets/png/sei.png" alt="Processo Judicial Eletrônico das Corregedorias" class="nav-logo">
              SEI!
            </b-link>
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/navegacao/pad"><img
                src="@/assets/png/timeline.png" alt="Processo Judicial Eletrônico das Corregedorias" class="nav-logo">
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
  /*display: inline;*/
}
</style>
