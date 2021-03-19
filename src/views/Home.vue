<template>
  <div class="pt-5" id="content">
    <b-card-group deck class="text-center">

      <b-card title="Sistemas Patrimoniais" img-src="https://picsum.photos/300/300/" img-alt="Image"
              img-top>
        <b-link class="stretched-link" to="/sistemas-patrimoniais"></b-link>
        <!--        <a href="/sistemas-patrimoniais" class="stretched-link"></a>-->
        <br>
        <hr>
        <b-card-text>
          <p>INFOJUD</p>
          <p>SISBAJUD</p>
          <p>RENAJUD</p>
          <p>SERASAJUD</p>
        </b-card-text>
      </b-card>

      <b-card title="Sistemas de Apoio à Jurisdição" img-src="https://picsum.photos/300/300/" img-alt="Image"
              img-top>
        <b-link class="stretched-link" to="/sistemas-apoio-jurisdicao"></b-link>
        <br>
        <hr>
        <b-card-text>
          <p>BNMP</p>
          <p>BANCO DE PERITOS</p>
          <p>SEEU</p>
          <p>SICEL</p>
          <p>SINIC</p>
          <p>SGT</p>
        </b-card-text>
      </b-card>

      <b-card title="Sistemas relacionados ao Cadastro Eleitoral" img-src="https://picsum.photos/300/300/"
              img-alt="Image" img-top>
        <b-link class="stretched-link" to="/sistemas-cadastro-eleitoral"></b-link>
        <hr>
        <b-card-text>
          <p>JUSTIFICA</p>
          <p>INFODIP</p>
          <p>SIEL</p>
          <p>ELO</p>
        </b-card-text>
      </b-card>

      <b-card title="Sistemas Processuais" img-src="https://picsum.photos/300/300/" img-alt="Image" img-top>
        <br>
        <b-link class="stretched-link" to="/sistemas-processuais"></b-link>
        <hr>
        <b-card-text>
          <p>PJE 1G</p>
          <p>PJE 2G</p>
          <p>PJECOR</p>
          <p>SEI</p>
          <p>PAD</p>
        </b-card-text>
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

/*.cards {*/
/*  transition: 0.7s;*/

/*}*/

/*.cards:hover {*/
/*  box-shadow: antiquewhite;*/
/*}*/

ul {
  list-style-type: none;
}

/*.card {*/
/*  margin: 0 auto;*/
/*  float: none;*/
/*  margin-bottom: 10px;*/
/*  width: 300px;*/
/*}*/
</style>
