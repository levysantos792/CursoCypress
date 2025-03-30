# 🤖 Projeto Cypress Básico

Este projeto contém testes automatizados utilizando o framework [Cypress](https://www.cypress.io/). O objetivo é demonstrar a configuração e execução de testes end-to-end em aplicações web.

## 📌 Requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- [Visual Studio Code](code.visualstudio.com/download)
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [npm](https://www.npmjs.com/)

## 🚀 Instalação
1. Acesse o repositório no github: [Cypress Básico](https://github.com/levysantos792/CursoCypress)
2. Faça um clone do projeto em seu computador: `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
3. Instale a dependência: `npm install`
4. Na raiz do projeto, execute o comando `npm install cypress@13.12.0 --save-dev` (ou `npm i cypress@13.12.0 -D` para a versão curta).
Execute o comando `npx cypress open` para abrir o Cypress pela primeira vez e deixe-o guiá-lo na criação de uma suite de testes de ponta a ponta (E2E).

## 📝 Estrutura do Projeto
    📂 nome-do-repositorio
    ├── 📂 cypress
    │   ├── 📂 e2e              # Testes end-to-end
    │   ├── 📂 fixtures         # Arquivos de mock de dados
    │   ├── 📂 support          # Comandos e configurações globais
    │   └── 📂 downloads        # Downloads de arquivos (se aplicável)
    ├── 📄 cypress.config.js    # Configuração do Cypress
    ├── 📄 package.json         # Dependências e scripts
    └── 📄 README.md            # Documentação do projeto

## 🎯 Como Executar os Testes

### Modo Interativo (GUI)

Execute o comando abaixo para abrir o Cypress em modo interativo:

`npm run cy:open`

Selecione o arquivo de teste desejado e execute.

### Modo Headless (Terminal)

Para rodar os testes no modo headless (sem interface gráfica), execute:

`test:run`

## 🛠 Configuração Adicional

Se necessário, personalize o arquivo cypress.config.js para ajustar as configurações do Cypress, como viewport, base URL e tempo de espera.

## 📄 Exemplo de Teste

**Exemplo de teste básico**
it('Verifica se a página inicial carrega corretamente', () => {
  cy.visit('https://exemplo.com')
  cy.get('h1').should('contain', 'Bem-vindo')
})
