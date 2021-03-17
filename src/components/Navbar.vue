<template>
  <div>

    <b-navbar type="light" class="shadow" toggleable="mg">
      <b-navbar-nav>
        <div>
          <b-navbar-toggle target="sidebar" class="mr-1 toggle-button" disabled></b-navbar-toggle>
          <b-link to="/">
            <img src="https://i.imgur.com/CbTBSvh.png" alt="" style="width: 120px;">
            </b-link>
        </div>
        <!--        <b-button v-b-toggle.sidebar>Toggle Sidebar</b-button>-->
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <a href="">
          <img class="ml-auto" src="http://www.tse.jus.br/temas/imagens/logos/tre-go.png" alt="">
        </a>
      </b-navbar-nav>


      <b-sidebar id="sidebar" sidebar-class="shadow">
        <nav class="mb-3">
          <b-nav vertical>
            <b-nav-item active @click="hide">Active</b-nav-item>
            <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
            <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
          </b-nav>
          <b-button variant="primary"  @click="hide">Close Sidebar</b-button>
        </nav>

      </b-sidebar>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style>
#sidebar {
  transition: 0.3s;
}

.toggle-button {
  transition: 0.5s;
}

.toggle-button:hover {
  background-color: lightgrey;
}
</style>
