<template>
  <div class="pt-5" id="content">
    <div class="text-center pb-4 text-uppercase"><h2>Central de Sistemas</h2></div>
    <b-card-group deck class="text-center">
      <b-card>
        <img class="card-img" src="@/assets/png/001-analytics.png" alt="Sistemas Patrimoniais">
        <h4 class="text-center pt-1">Sistemas Patrimoniais</h4>
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
      <!--      <b-card title="Sistemas de Apoio à Jurisdição" img-src="https://picsum.photos/300/300/" img-alt="Image"-->
      <!--              img-top>-->
      <b-card>
        <img class="card-img" src="@/assets/png/012-connection.png" alt="Sistemas de Apoio à Jurisdição">
        <h4>Sistemas de Apoio à Jurisdição</h4>
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

      <b-card>
        <img class="card-img" src="@/assets/png/029-server.png" alt="Sistemas Relacionados ao Cadastro Eleitoral">
        <h4>Sistemas Relacionados ao Cadastro Eleitoral</h4>
        <b-link class="stretched-link" to="/sistemas-cadastro-eleitoral"></b-link>
        <hr>
        <b-card-text>
          <p>JUSTIFICA</p>
          <p>INFODIP</p>
          <p>SIEL</p>
          <!--          <p>ELO</p>-->
        </b-card-text>
      </b-card>

      <b-card>
        <img class="card-img" src="@/assets/png/024-document.png" alt="Sistemas Processuais">
        <h4>Sistemas Processuais</h4>
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

ul {
  list-style-type: none;
}

.card {
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease-out;
  text-decoration: none;
  --box-shadow-color: rgba(206, 178, 252, 0.48);
}


.card:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
  0 24px 46px var(--box-shadow-color);

}

.card-img {
  width: 140px;
  transition: all 0.6s ease-out;
}

@media screen and (max-width: 1199px) {
  .card-img {
    width: 130px;
  }
}

@media screen and (max-width: 1000px) {
  .card-img {
    width: 90px;
  }
}

@media screen and (max-width: 768px) {
  .card-img {
    width: 50px;
  }
}

@media screen and (max-width: 575px) {
  .card-img {
    width: 180px;
  }
}

/* Icons by Icongeek26
https://www.flaticon.com/authors/icongeek26 */
</style>
