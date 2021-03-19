<template>
  <div>
    <section class="pb-5">
      <div class="text-center pt-4">
        <img src="@/assets/infojud.png" alt="img">
      </div>

      <div class="pt-5">
        <h4>Para que serve:</h4>
        <p>É um serviço oferecido unicamente aos magistrados (e servidores por eles autorizados), que tem como objetivo
          atender às solicitações feitas pelo Poder Judiciário à Receita Federal.</p>
      </div>

      <div class="pt-3">
        <h4>Link de acesso:</h4>
        <p><a href="https://cav.receita.fazenda.gov.br/autenticacao/login/index">https://cav.receita.fazenda.gov.br/autenticacao/login/index</a>
        </p>

      </div>

      <div class="pt-3">
        <h4>Forma de acesso:</h4>
        <p>Via gov.br com Certificado Digital (Token)</p>
      </div>

      <div class="pt-3">
        <h4>Solicitação de acesso:</h4>
        <p>Preencher o <a href="#">Formulário - Solicitação de Acesso</a> e enviar à ASGES via SEI.</p>
      </div>

      <div class="pt-3">
        <h4>Mais informações:</h4>
        <p><a href="https://www.cnj.jus.br/sistemas/infojud/">https://www.cnj.jus.br/sistemas/infojud/</a></p>

      </div>

      <div class="pt-3">
        <h4>Normativos:</h4>
        <p><a href="#">Convênio celebrado entre o Conselho Nacional de Justiça (CNJ) e a Secretaria da Receita Federal
          (RFB)</a></p>
        <p><a href="">Portaria nº 066/2020 – PRES do TRE-GO</a></p>
      </div>

      <div class="pt-3">
        <h4>Suporte:</h4>
        <p>Email: <a href="mailto:sistemasnacionais@cnj.jus.br">sistemasnacionais@cnj.jus.br</a> ou Telefone: (61)
          2326-5353</p>
        <p>Em caso de dúvidas sobre a utilização do Infojud, envie e-mail para: <a
            href="mailto:duvidas_e_sugestoes_sistemas@cnj.jus.br">duvidas_e_sugestoes_sistemas@cnj.jus.br</a>
        </p>
        <p>Para contato direto com a Receita Federal, envie e-mail para: <a
            href="mailto:infojud@receita.fazenda.gov.br">infojud@receita.fazenda.gov.br</a></p>
      </div>
    </section>


    <b-link class="pb-5" to="/sistemas-patrimoniais">Voltar</b-link>
  </div>
</template>

<script>
export default {
  name: "Infojud"
}
</script>

<style scoped>

</style>
