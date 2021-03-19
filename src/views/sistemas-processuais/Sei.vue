<template>
  <div>
    <section class="pb-5">
      <div class="text-center pt-4">
        <img src="@/assets/sei.png" alt="img">
      </div>

      <div class="pt-5">
        <h4>Para que serve:</h4>
        <p>O Sistema Eletrônico de Informações (SEI) é um sistema de produção e gestão de documentos e processos
          eletrônicos desenvolvido pelo Tribunal Regional Federal da 4ª Região (TRF4) e cedido gratuitamente à
          administração pública. O SEI foi escolhido como a solução de processo eletrônico no âmbito do projeto Processo
          Eletrônico Nacional (PEN) – iniciativa conjunta de órgãos e entidades de diversas esferas da administração
          pública, com o intuito de construir uma infraestrutura pública de processos e documentos administrativos
          eletrônicos, e têm sido implementado em vários órgãos e entidades das mais variadas esferas
          administrativas. </p>
      </div>

      <div class="pt-3">
        <h4>Link de acesso:</h4>
        <p>SEI TRE-GO: <a
            href="https://sei.tre-go.jus.br/sip/login.php?sigla_orgao_sistema=TRE-GO&sigla_sistema=SEI&infra_url=L3NlaS8=">https://sei.tre-go.jus.br/sip/login.php?sigla_orgao_sistema=TRE-GO&sigla_sistema=SEI&infra_url=L3NlaS8=</a>
        </p>
        <p>SEI Acesso Externo:
          <a href="https://sei.tre-go.jus.br/sei/controlador_externo.php?acao=usuario_externo_logar&id_orgao_acesso_externo=0">https://sei.tre-go.jus.br/sei/controlador_externo.php?acao=usuario_externo_logar&id_orgao_acesso_externo=0</a>
        </p>
      </div>

      <div class="pt-3">
        <h4>Forma de acesso:</h4>
        <p>Título de Eleitor e Senha <i>OU</i></p>
        <p>Email e Senha para Acesso Externo</p>
      </div>

      <div class="pt-3">
        <h4>Solicitação de acesso:</h4>
        <p>Enviar solicitação para a SEGEC <a href="apoio-lista@tre-go.jus.br">apoio-lista@tre-go.jus.br</a></p>
      </div>

      <div class="pt-3">
        <h4>Mais informações:</h4>
        <p><a href="http://sei.goias.gov.br/">http://sei.goias.gov.br/</a>
        </p>

      </div>

<!--      <div class="pt-3">-->
<!--        <h4>Normativos:</h4>-->
<!--        <p><a href="https://atos.cnj.jus.br/atos/detalhar/3336">Provimento Corregedoria Nacional de Justiça-->
<!--          nº102/2020</a></p>-->
<!--      </div>-->

      <div class="pt-3">
        <h4>Suporte:</h4>
        <p>SEGEC: <a
            href="mailto:apoio-lista@tre-go.jus.br">apoio-lista@tre-go.jus.br</a></p>

      </div>
    </section>

    <b-link class="pb-5" to="/sistemas-processuais">Voltar</b-link>
  </div>
</template>

<script>
export default {
  name: "Sei"
}
</script>

<style scoped>

</style>
