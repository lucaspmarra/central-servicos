## Documentação para instalação e manutenção do projeto

- Necessário ter Node.Js, NPM (vem instalado com o Node.js) e YARN instalados no computador.
- Node.js: <https://nodejs.org/en/download/>
- YARN: <https://yarnpkg.com/> que pode ser instalado com o comando:
  - `npm install -g yarn`

#### Habilitar execução de scripts (executar como adm no powershell)

- `Get-ExecutionPolicy`
  - provavelmente vai estar como `"restrict"`
- `Set-ExecutionPolicy RemoteSigned`

#### Necessário configurar o proxy no NPM e no YARN (!!)

- Para configurar no NPM:

  - `npm config set proxy http://username:password@host:port`
  - `npm config set https-proxy http://username:password@host:port`

- Para configurar no YARN:
  - `yarn config set proxy http://username:password@host:port`
  - `yarn config set https-proxy http://username:password@host:port`

#### Instalação das dependências do projeto

- Ao baixar ou clonar o repositório, é necessário instalar os módulos de dependências do Node.js.
- Basta acessar a pasta raiz do projeto e utilizar o comando:
  `yarn`
- Feito isso, só aguardar até que tudo seja instalado, essa pasta é excluída do commit por ser muito grande e muitas vezes, ter bastante arquivo desnecessário.

#### Estrutura do projeto e edição

- Para editar o projeto, inicie o servidor local de desenvolvimento utilizando o comando `yarn serve` no terminal.  
  ![img01](readme\iuczAmD.png)

- Após isso, o servidor vai iniciar e vai mostrar um link de acesso localhost ou o ip da máquina que pode ser compartilhado.  
  ![img02](readme\D8aCfUa.png)

- A estrutura do projeto:  
  ![img03](readme\C5wRRfk.png)
- As páginas de conteúdo estão dentro de "views" e divididas por categorias, as mesmas que aparecem na tela da central.
- Basta selecionar a view que foi pedida no chamado, editar o conteúdo e salvar.

- Após a edição do projeto, é necessário compilar o código para que se possa gerar os arquivos HTML estáticos.
- Para tal, execute o comando `yarn build`, que irá compilar o código para a pasta `/dist`  
  ![img04](readme\c27kP5K.png)
  ![img05](readme\ODsagEu.png)

- Copie todos os arquivos da pasta "dist" substitua os arquivos antigos no servidor
  ![img06](readme\wvaSFQq.png)
