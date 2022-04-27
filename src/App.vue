<template>
  <div id="content-main">
    <div id="nav">
      <Navbar/>
      <div class="sidebar shadow">
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
            alt="Sistema de Inspeções e Correições Eleitorais" class="nav-logo" src="@/assets/png/police-station.png">
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
            alt="Processo Judicial Eletrônico das Corregedorias" class="nav-logo" src="@/assets/png/certificate.png">
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
      </div>
    </div>

    <div class="container">
      <router-view/>
    </div>

    <p class="text-center pt-5">Desenvolvimento <strong>SESCO</strong></p>


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
.container-content {
  background-color: white;
  padding: 10px 10px 20px 20px;
  margin-top: 50px;
  border-radius: 10px;
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
  width: 180px;
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
    display: none;
  }

  .sidebar:hover {
    overflow: auto;
  }

}

</style>
