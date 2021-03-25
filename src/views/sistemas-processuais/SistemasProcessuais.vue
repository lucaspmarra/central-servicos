<template>
  <div class="pt-5" id="content">
    <div class="text-center pb-4"><h2>SISTEMAS PROCESSUAIS</h2></div>

    <div class="pb-2">
      <b-card-group deck class="text-center">
        <b-card>
          <img src="@/assets/png/pje.png" alt="PJE1G" class="card-img">
          <h4>PJe 1º Grau</h4>
          <b-card-text>
            Processo Judicial Eletrônico - Zonas Eleitorais
          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/pje1g"></b-link>
        </b-card>

        <b-card>
          <img src="@/assets/png/pje.png" alt="PJE1G" class="card-img">
          <h4>PJe 2º Grau</h4>
          <b-card-text>
            Processo Judicial Eletrônico - Tribunal
          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/pje2g"></b-link>
        </b-card>

        <b-card>
          <img src="@/assets/png/certificate.png" alt="Processo Judicial Eletrônico das Corregedorias" class="card-img">
          <h4>PJECor</h4>
          <b-card-text>
            Processo Judicial Eletrônico das Corregedorias
          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/pjecor"></b-link>
        </b-card>

        <b-card>
          <img src="@/assets/png/sei.png" alt="Processo Judicial Eletrônico das Corregedorias" class="card-img pt-2">
          <h4 class="pt-5">SEI!</h4>
          <b-card-text>
            Sistema Eletrônico de Informações
          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/sei"></b-link>
        </b-card>

        <b-card>
          <img src="@/assets/png/timeline.png" alt="Processo Judicial Eletrônico das Corregedorias" class="card-img">
          <h4>PAD</h4>
          <b-card-text>
            Processo Administrativo Digital
          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/pad"></b-link>
        </b-card>
      </b-card-group>
    </div>
    <a href="/central-de-sistemas">Voltar</a>
  </div>
</template>

<script>
export default {
  name: "SistemasProcessuais"
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
  width: 170px;
  transition: all 0.3s ease-out;
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
</style>
