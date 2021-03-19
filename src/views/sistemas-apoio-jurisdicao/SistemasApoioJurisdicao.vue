<template>
  <div class="pt-5" id="content">

    <div class="row pb-2">
      <b-card-group deck class="text-center">
        <b-card title="BNMP" img-src="https://picsum.photos/300/300/" img-alt="Image"
                img-top>
          <b-card-text>
            <p>Banco Nacional de Monitoramento de Prisões</p>

          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/bnmp"></b-link>
        </b-card>

        <b-card title="SINIC/PF" img-src="https://picsum.photos/300/300/" img-alt="Image" img-top>
          <b-card-text>
            <p>
              Sistema Nacional de Informações Criminais da Polícia Federal
            </p>

          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/sinic"></b-link>
        </b-card>

        <b-card title="SEEU" img-src="https://picsum.photos/300/300/"
                img-alt="Image" img-top>
          <b-card-text>
            <p>
              Sistema Eletrônico de Execução Unificado
            </p>

          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/seeu"></b-link>
        </b-card>
      </b-card-group>
    </div>

    <div class="row pt-2">
      <b-card-group deck class="text-center">
        <b-card title="SGT" img-src="https://picsum.photos/300/300/" img-alt="Image" img-top>
          <b-card-text>
            <p>
              Sistema de Gestão de Tabelas Processuais Unificadas
            </p>

          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/sgt"></b-link>
        </b-card>

        <b-card title="SICEL" img-src="https://picsum.photos/300/300/" img-alt="Image" img-top>
          <b-card-text>
            Sistema de Inspeções e Correições Eleitorais
          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/sicel"></b-link>
        </b-card>

        <b-card title="Banco de Peritos" img-src="https://picsum.photos/300/300/" img-alt="Image" img-top>

          <b-link class="stretched-link" to="/navegacao/bancoperitos"></b-link>
        </b-card>
      </b-card-group>
    </div>


    <a href="/">Voltar</a>
  </div>
</template>

<script>
export default {
  name: "SistemasApoioJurisdicao"
}
</script>

<style scoped>

</style>
