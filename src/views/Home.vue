<template>
  <div class="pt-5" id="content">
    <b-card-group deck class="text-center">

      <b-card class="cards" title="Sistemas Patrimoniais" img-src="https://picsum.photos/300/300/" img-alt="Image"
              img-top>
        <b-link class="stretched-link" to="/sistemas-patrimoniais"></b-link>
        <!--        <a href="/sistemas-patrimoniais" class="stretched-link"></a>-->
      </b-card>

      <b-card title="Sistemas de Apoio à Jurisdição" img-src="https://picsum.photos/300/300/" img-alt="Image" img-top>
      </b-card>

      <b-card title="Sistemas relacionados ao Cadastro Eleitoral" img-src="https://picsum.photos/300/300/"
              img-alt="Image" img-top>
      </b-card>

      <b-card title="Sistemas Processuais" img-src="https://picsum.photos/300/300/" img-alt="Image" img-top>
      </b-card>
    </b-card-group>

  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {}
}
</script>
<style>
#content {
  background-color: #F1F4F6;
}

.cards {
  transition: 0.7s;
}

.cards:hover {
  box-shadow: antiquewhite;
}
</style>
