<template>
  <div>
    <section class="pb-5">
      <div class="text-center pt-4">
        <img src="@/assets/bancoperitos.png" alt="img" style="width: 200px;">
      </div>

      <div class="pt-5">
        <h4>Para que serve:</h4>
        <p>Fornece os dados dos peritos cadastrados pela Corregedoria Geral de Justiça do Estado de Goiás.</p>
      </div>

      <div class="pt-3">
        <h4>Link de acesso:</h4>
        <p><a href="http://corregedoria.tjgo.jus.br/bancodeperitos/login ">http://corregedoria.tjgo.jus.br/bancodeperitos/login </a>
        </p>

      </div>

      <div class="pt-3">
        <h4>Forma de acesso:</h4>
        <p>Certificado Digital (Token) ou CPF e Senha do SCA/CNJ</p>
      </div>

      <div class="pt-3">
        <h4>Solicitação de acesso:</h4>
        <p>Preencher o <a href="#">Formulário - Solicitação de Acesso</a> e enviar à ASGES via SEI.</p>
      </div>

<!--      <div class="pt-3">-->
<!--        <h4>Mais informações:</h4>-->
<!--        <p><a href="https://www.cnj.jus.br/sistema-carcerario/bnmp-2-0/">https://www.cnj.jus.br/sistema-carcerario/bnmp-2-0/</a></p>-->
<!--      </div>-->

      <div class="pt-3">
        <h4>Normativos:</h4>
        <p><a href="#">Resolução TRE-GO nº 324/2020</a></p>
      </div>

      <div class="pt-3">
        <h4>Suporte:</h4>
        <p>Email: <a href="mailto:asges-lista@tre-go.jus.br ">asges-lista@tre-go.jus.br </a> ou Telefone: (62)
          3920-4022</p>
      </div>
    </section>


    <b-link class="pb-5" to="/sistemas-apoio-jurisdicao">Voltar</b-link>
  </div>
</template>

<script>
export default {
  name: "BancoPeritos"
}
</script>

<style scoped>

</style>
