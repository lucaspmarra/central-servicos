<template>
  <div class="pt-5" id="content">
    <b-card-group deck class="text-center">

      <b-card title="SISBAJUD" img-src="https://picsum.photos/400/400/" img-alt="Image"
              img-top>
        <b-card-text>
          Sistema de Busca de Ativos do Poder Judiciário
        </b-card-text>

        <b-link class="stretched-link" to="/navegacao/sisbajud"></b-link>
      </b-card>

      <b-card title="INFOJUD" img-src="https://picsum.photos/400/400/" img-alt="Image" img-top>
        <b-card-text>
          Sistema de Informações ao Judiciário
        </b-card-text>
        <b-link class="stretched-link" to="/navegacao/infojud"></b-link>
      </b-card>

      <b-card title="RENAJUD" img-src="https://picsum.photos/400/400/"
              img-alt="Image" img-top>
        <b-card-text>
          Sistema de Restrições Judiciais sobre Veículos Automotores
        </b-card-text>
        <b-link class="stretched-link" to="/navegacao/renajud"></b-link>
      </b-card>

      <b-card title="SERASAJUD" img-src="https://picsum.photos/400/400/" img-alt="Image" img-top>
        <b-link class="stretched-link" to="/navegacao/serasajud"></b-link>
      </b-card>

    </b-card-group>

    <a href="/">Voltar</a>
  </div>
</template>

<script>
export default {
  name: "SistemasPatrimoniais"
}
</script>

<style scoped>

</style>
