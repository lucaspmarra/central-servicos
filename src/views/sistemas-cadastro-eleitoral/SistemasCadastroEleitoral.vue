<template>
  <div class="pt-5" id="content">
    <div class="text-center pb-4 text-uppercase"><h2>Sistemas Relacionados ao Cadastro Eleitoral</h2></div>
    <div class="pb-2">
      <b-card-group deck class="text-center">
        <b-card>
          <img src="@/assets/png/smartphone.png" alt="Justifica" class="card-img">
          <h4 class="text-uppercase">Justifica</h4>
          <b-card-text>
            Sistema de Justificativas Eleitorais Eletrônicas
          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/justifica"></b-link>
        </b-card>

        <b-card>
          <img src="@/assets/png/report.png" alt="Infodip" class="card-img">
          <h4 class="text-uppercase">Infodip</h4>
          <b-card-text>
            Sistema de Comunicações Sobre Direitos Políticos
          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/infodip"></b-link>
        </b-card>

        <b-card>
          <img src="@/assets/png/web.png" alt="Siel" class="card-img">
          <h4 class="text-uppercase">Siel</h4>
          <b-card-text>
            Sistema de Informações Eleitorais
          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/siel"></b-link>
        </b-card>

<!--        <b-card>-->
<!--          <img src="@/assets/png/link.png" alt="Elo" class="card-img">-->
<!--          <h4 class="text-uppercase">Elo</h4>-->
<!--          <b-link class="stretched-link" to="/navegacao/elo"></b-link>-->
<!--        </b-card>-->
      </b-card-group>
    </div>
    <b-link class="pb-5" to="/">Voltar</b-link>
<!--    <a href="/central-de-sistemas">Voltar</a>-->
  </div>
</template>

<script>
export default {
  name: "SistemasCadastroEleitoral"
}
</script>

<style scoped>
.card{
  box-shadow: 0 14px 26px rgba(0,0,0,0.04);
  transition: all 0.3s ease-out;
  text-decoration: none;
  --box-shadow-color: rgba(206, 178, 252, 0.48);
}

.card:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow: 0 24px 36px rgba(0,0,0,0.11),
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
