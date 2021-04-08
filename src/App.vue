<template>
  <div id="content-main">
    <div id="nav">
      <Navbar/>
      <div class="sidebar shadow">
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
      </div>
    </div>
    <div class="container">
          <router-view/>
    </div>

  </div>
</template>
<script>
import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar,
  },


}
</script>
<style>
html, body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  background-color: #F1F4F6;
}

#content-main {
  background-color: #F1F4F6;
}

#nav {
  /*padding: 30px;*/
  /*background-color: #FAFBFC;*/
  background-color: #FFFFFF;
}

/*
 * Sidebar
 */
.nav-logo {
  width: 35px;
}

.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:*/
  /*right: 0;*/
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 0 0 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  width: 75px;
  background-color: #FFFFFF;
  transition: 0.3s ease-in-out;

}

.sidebar a {
  font-size: 0;
  transition: 0.3s ease-in-out;
}

.sidebar:hover a,
.sidebar:focus a {
  font-size: 14px;
}

.sidebar:hover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 0 0 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  width: 200px;
  background-color: #FFFFFF;

}

/*
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {

  .sidebar {
    top: 0;
  }

  .sidebar:hover {
    overflow: auto;
  }

}

/*
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {

  .sidebar {
    top: 0;
  }

  .sidebar:hover {
    overflow: auto;
  }

}

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {

  .sidebar {
    top: 0;
  }

  .sidebar:hover {
    overflow: auto;
  }

}

/*
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

  .sidebar {
    top: 0;
  }

  .sidebar:hover {
    overflow: auto;
  }

}

/*
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {

  .sidebar {
    display: none;
  }

}

/*
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {

  .sidebar {
    top: 0;
  }

  .sidebar:hover {
    overflow: auto;
  }

}

</style>
