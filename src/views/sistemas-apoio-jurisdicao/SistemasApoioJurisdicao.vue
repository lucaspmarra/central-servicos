<template>
  <div class="pt-5" id="content">
    <div class="text-center pb-4 text-uppercase"><h2>Sistemas de Apoio à Jurisdição</h2></div>
    <b-card-group deck class="text-center">
      <b-card>
        <img src="@/assets/png/arrest.png" alt="Banco Nacional de Monitoramento de Prisões" class="card-img">
        <h4>BNMP</h4>
        <b-card-text>
          <p>Banco Nacional de Monitoramento de Prisões</p>

        </b-card-text>
        <b-link class="stretched-link" to="/navegacao/bnmp"></b-link>
      </b-card>

      <b-card>
        <img src="@/assets/png/protection.png" alt="Sistema Nacional de Informações Criminais da Polícia Federal"
             class="card-img">
        <h4>SINIC/PF</h4>
        <b-card-text>
          <p>
            Sistema Nacional de Informações Criminais da Polícia Federal
          </p>

        </b-card-text>
        <b-link class="stretched-link" to="/navegacao/sinic"></b-link>
      </b-card>

      <b-card>
        <img src="@/assets/png/document.png" alt="Sistema Eletrônico de Execução Unificado" class="card-img">
        <h4>SEEU</h4>
        <b-card-text>
          <p>
            Sistema Eletrônico de Execução Unificado
          </p>
        </b-card-text>
        <b-link class="stretched-link" to="/navegacao/seeu"></b-link>
      </b-card>
    </b-card-group>

    <b-card-group deck class="text-center pt-4">
      <b-card>
        <img src="@/assets/png/law.png" alt="Sistema de Gestão de Tabelas Processuais Unificadas" class="card-img">
        <h4>SGT</h4>
        <b-card-text>
          <p>
            Sistema de Gestão de Tabelas Processuais Unificadas
          </p>

        </b-card-text>
        <b-link class="stretched-link" to="/navegacao/sgt"></b-link>
      </b-card>

      <b-card>
        <img src="@/assets/png/police-station.png" alt="Sistema de Inspeções e Correições Eleitorais"
             class="card-img">
        <h4>SICEL</h4>
        <b-card-text>
          Sistema de Inspeções e Correições Eleitorais
        </b-card-text>
        <b-link class="stretched-link" to="/navegacao/sicel"></b-link>
      </b-card>

      <b-card>
        <img src="@/assets/png/riot-police.png" alt="Banco de Peritos" class="card-img">
        <h4>Banco de Peritos</h4>
        <b-link class="stretched-link" to="/navegacao/bancoperitos"></b-link>
      </b-card>
    </b-card-group>


    <a href="/central-de-sistemas">Voltar</a>
  </div>
</template>

<script>
export default {
  name: "SistemasApoioJurisdicao"
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
    width: 100px;
  }
}
@media screen and (max-width: 575px) {
  .card-img {
    width: 200px;
  }
}
</style>
