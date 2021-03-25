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
            <b-link class="btn btn-light text-left d-flex align-items-center" to="/sistemas-patrimoniais"><img
                src="@/assets/png/001-analytics.png" alt="teste" class="nav-logo"> Sistemas Patrimoniais
            </b-link>

            <b-link class="btn btn-light text-left d-flex align-items-center" to="/sistemas-apoio-jurisdicao"><img
                src="@/assets/png/012-connection.png" alt="teste"
                class="nav-logo"> Sistemas de Apoio à Jurisdição
            </b-link>

            <b-link class="btn btn-light text-left d-flex align-items-center" to="/sistemas-cadastro-eleitoral"><img
                src="@/assets/png/029-server.png" alt="teste" class="nav-logo">Sistemas
              Relacionados ao Cadastro Eleitoral
            </b-link>

            <b-link class="btn btn-light text-left d-flex align-items-center" to="/sistemas-processuais"><img
                src="@/assets/png/024-document.png" alt="teste" class="nav-logo">Sistemas Processuais
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
