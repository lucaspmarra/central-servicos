<template>
  <div class="pt-5" id="content">
    <b-card-group deck class="text-center">

      <b-card class="cards" title="SISBAJUD" img-src="https://picsum.photos/300/300/" img-alt="Image"
              img-top>
        <b-card-text>
          Sistema de Busca de Ativos do Poder Judiciário
        </b-card-text>
        <b-link class="stretched-link" to="/sistemas-patrimoniais/sisbajud"></b-link>
        <!--        <a href="/sistemas-patrimoniais" class="stretched-link"></a>-->
      </b-card>

      <b-card title="INFOJUD" img-src="https://picsum.photos/300/300/" img-alt="Image" img-top>
        <b-card-text>
          Sistema de Informações ao Judiciário
        </b-card-text>
        <b-link class="stretched-link" to="/sistemas-patrimoniais"></b-link>
      </b-card>

      <b-card title="RENAJUD" img-src="https://picsum.photos/300/300/"
              img-alt="Image" img-top>
        <b-card-text>
          Sistema de Restrições Judiciais sobre Veículos Automotores
        </b-card-text>
        <b-link class="stretched-link" to="/sistemas-patrimoniais"></b-link>
      </b-card>

      <b-card title="SERASAJUD" img-src="https://picsum.photos/300/300/" img-alt="Image" img-top>
        <b-link class="stretched-link" to="/sistemas-patrimoniais"></b-link>
      </b-card>
    </b-card-group>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "SistemasPatrimoniais"
}
</script>

<style scoped>

</style>
