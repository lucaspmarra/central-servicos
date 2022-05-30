<template>
  <div id="content" class="pt-5">
    <div class="text-center pb-4"><h2>SISTEMAS PATRIMONIAIS</h2></div>
    <b-card-group class="text-center" deck>

      <b-card>
        <img alt="Sistema de Busca de Ativos do Poder Judiciário" class="card-img" src="@/assets/png/113-tie.png">
        <h4>SISBAJUD</h4>
        <b-card-text>
          Sistema de Busca de Ativos do Poder Judiciário
        </b-card-text>

        <b-link class="stretched-link" to="/navegacao/sisbajud"></b-link>
      </b-card>

      <b-card>
        <img alt="Sistema de Informações ao Judiciário" class="card-img" src="@/assets/png/111-goal.png">
        <h4>INFOJUD</h4>
        <b-card-text>
          Sistema de Informações ao Judiciário
        </b-card-text>
        <b-link class="stretched-link" to="/navegacao/infojud"></b-link>
      </b-card>

      <b-card>
        <img alt="Sistema de Restrições Judiciais sobre Veículos Automotores" class="card-img"
             src="@/assets/png/car.png">
        <h4>RENAJUD</h4>
        <b-card-text>
          Sistema de Restrições Judiciais sobre Veículos Automotores
        </b-card-text>
        <b-link class="stretched-link" to="/navegacao/renajud"></b-link>
      </b-card>

      <b-card>
        <img alt="SERASAJUD" class="card-img" src="@/assets/png/funding.png">
        <h4>SERASAJUD</h4>
        <b-card-text>
          Sistema de Envio de Ordens Judiciais à Serasa Experian
        </b-card-text>
        <b-link class="stretched-link" to="/navegacao/serasajud"></b-link>
      </b-card>

    </b-card-group>
    <b-card-group class="text-center cnib-card" deck>
      <b-card>
        <img alt="CNIB" class="card-img cnib-img" src="@/assets/png/casa.png">
        <h4>CNIB</h4>
        <b-card-text>
          Central Nacional de Indisponibilidade de Bens
        </b-card-text>
        <b-link class="stretched-link" to="/navegacao/cnib"></b-link>
      </b-card>
    </b-card-group>
    <b-link class="pb-5" to="/">Voltar</b-link>
    <!--    <a href="/central-de-sistemas">Voltar</a>-->
  </div>
</template>

<script>
export default {
  name: "SistemasPatrimoniais"
}
</script>

<style scoped>
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
.cnib-card{
  width: 285px;
  padding-top: 10px;
}

.card-img {
  width: 200px;
  transition: all 0.3s ease-out;
}

@media screen and (max-width: 1000px) {
  .card-img {
    width: 100px;
  }

}

@media screen and (max-width: 768px) {
  .card-img {
    width: 70px;
  }
  .cnib-card{
    width: auto;
    padding-top: 10px;
  }
}

@media screen and (max-width: 575px) {
  .card-img {
    width: 200px;
  }

}
</style>
