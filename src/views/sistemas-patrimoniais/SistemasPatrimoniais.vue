<template>
  <div class="pt-5" id="content">
    <div class="text-center pb-4"><h2>SISTEMAS PATRIMONIAIS</h2></div>
    <b-card-group deck class="text-center">

      <b-card>
        <img src="@/assets/png/113-tie.png" alt="Sistema de Busca de Ativos do Poder Judiciário" class="card-img">
        <h4>SISBAJUD</h4>
        <b-card-text>
          Sistema de Busca de Ativos do Poder Judiciário
        </b-card-text>

        <b-link class="stretched-link" to="/navegacao/sisbajud"></b-link>
      </b-card>

      <b-card>
        <img src="@/assets/png/111-goal.png" alt="Sistema de Informações ao Judiciário" class="card-img">
        <h4>INFOJUD</h4>
        <b-card-text>
          Sistema de Informações ao Judiciário
        </b-card-text>
        <b-link class="stretched-link" to="/navegacao/infojud"></b-link>
      </b-card>

      <b-card>
        <img src="@/assets/png/car.png" alt="Sistema de Restrições Judiciais sobre Veículos Automotores" class="card-img">
        <h4>RENAJUD</h4>
        <b-card-text>
          Sistema de Restrições Judiciais sobre Veículos Automotores
        </b-card-text>
        <b-link class="stretched-link" to="/navegacao/renajud"></b-link>
      </b-card>

      <b-card>
        <img src="@/assets/png/funding.png" alt="SERASAJUD" class="card-img">
        <h4>SERASAJUD</h4>
        <b-link class="stretched-link" to="/navegacao/serasajud"></b-link>
      </b-card>

    </b-card-group>

    <a href="/central-de-sistemas">Voltar</a>
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

.card-img {
  width: 200px;
  transition: all 0.3s ease-out;
}

@media screen and (max-width: 1000px) {
  .card-img {
    width: 160px;
  }
}

@media screen and (max-width: 768px) {
  .card-img {
    width: 70px;
  }
}

@media screen and (max-width: 575px) {
  .card-img {
    width: 200px;
  }
}
</style>
