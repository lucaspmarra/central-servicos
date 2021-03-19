<template>
  <div class="pt-5" id="content">

    <div class="row pb-2">
      <b-card-group deck class="text-center">
        <b-card title="PJe 1º Grau" img-src="https://picsum.photos/300/300/" img-alt="Image"
                img-top>
          <b-card-text>
            Processo Judicial Eletrônico - Zonas Eleitorais
          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/pje1g"></b-link>
        </b-card>

        <b-card title="PJe 2º Grau" img-src="https://picsum.photos/300/300/" img-alt="Image" img-top>
          <b-card-text>
            Processo Judicial Eletrônico - Tribunal
          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/pje2g"></b-link>
        </b-card>

        <b-card title="PjeCor" img-src="https://picsum.photos/300/300/"
                img-alt="Image" img-top>
          <b-card-text>
            Processo Judicial Eletrônico das Corregedorias
          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/pjecor"></b-link>
        </b-card>

        <b-card title="SEI!" img-src="https://picsum.photos/300/300/"
                img-alt="Image" img-top>
          <b-card-text>
            Sistema Eletrônico de Informações
          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/sei"></b-link>
        </b-card>

        <b-card title="PAD" img-src="https://picsum.photos/300/300/"
                img-alt="Image" img-top>
          <b-card-text>
            Processo Administrativo Digital
          </b-card-text>
          <b-link class="stretched-link" to="/navegacao/pad"></b-link>
        </b-card>
      </b-card-group>
    </div>
    <a href="/">Voltar</a>
  </div>
</template>

<script>
export default {
  name: "SistemasProcessuais"
}
</script>

<style scoped>

</style>
