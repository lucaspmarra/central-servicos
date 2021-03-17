<template>
  <div id="content-main">
    <div id="nav">
      <Navbar/>
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
  }
}
</script>
<style>
html, body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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

</style>
