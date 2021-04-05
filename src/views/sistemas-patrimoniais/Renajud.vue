<template>
  <div>
    <section class="pb-5">
      <div class="text-center pt-4">
        <img src="@/assets/renajud.png" alt="img">
      </div>

      <div class="pt-5">
        <h4>Para que serve:</h4>
        <p>Permite consultas e envio, em tempo real, à base de dados do Registro Nacional de Veículos Automotores
          (Renavam), de ordens judiciais de restrições de veículos — inclusive registro de penhora — de pessoas
          condenadas em ações judiciais.</p>
      </div>

      <div class="pt-3">
        <h4>Manual do Sistema:</h4>
        <p><a href="https://renajud.denatran.serpro.gov.br/renajud/ajuda/manual.pdf">https://renajud.denatran.serpro.gov.br/renajud/ajuda/manual.pdf</a>
        </p>
      </div>

      <div class="pt-3">
        <h4>Link de acesso:</h4>
        <p><a href="https://renajud.denatran.serpro.gov.br/renajud/login.jsf">https://renajud.denatran.serpro.gov.br/renajud/login.jsf</a>
        </p>
      </div>

      <div class="pt-3">
        <h4>Forma de acesso:</h4>
        <p>Acesso exclusivo via certificado digital (token)</p>
      </div>

      <div class="pt-3">
        <h4>Solicitação de acesso:</h4>
        <p>Via SEI, preencher o "Formulário - Acesso a Sistema - Corregedoria" e enviar para a Assessoria de
          Planejamento, Governança e Gestão da Vice-Presidência e Corregedoria</p>
      </div>

      <div class="pt-3">
        <h4>Mais informações:</h4>
        <p><a href="https://www.cnj.jus.br/sistemas/renajud-4/">https://www.cnj.jus.br/sistemas/renajud-4/</a></p>

      </div>

      <div class="pt-3">
        <h4>Normativos:</h4>
        <p><a href="http://intranet.tre-go.gov.br/sistemas/publicacoes/noticia_visualizar.php?id=191220191641232147 ">Termo
          de Cooperação Técnica</a> celebrado entre o Conselho Nacional de Justiça, o Ministério das
          Cidades e o Ministério da Justiça.</p>
      </div>

      <div class="pt-3">
        <h4>Suporte:</h4>
        <p>Serviço Federal de Processamento de Dados - SERPRO, e-mail: <a href="mailto:css.serpro@serpro.gov.br">css.serpro@serpro.gov.br</a>
          ou Telefone: 0800 728 2324</p>
        <p>Em caso de dúvidas sobre a utilização do Renajud, envie e-mail para: <a
            href="mailto:duvidas_e_sugestoes_sistemas@cnj.jus.br">duvidas_e_sugestoes_sistemas@cnj.jus.br</a>
        </p>
      </div>
    </section>


    <b-link class="pb-5" to="/sistemas-patrimoniais">Voltar</b-link>
  </div>
</template>

<script>
export default {
  name: "Renajud"
}
</script>

<style scoped>

</style>
