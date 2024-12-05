# CI_CD_System

### Descrição do Projeto
Este projeto consiste na configuração e operação de uma pipeline de CI/CD para um sistema simples com uma página HTML (index.html) e um banco de dados. O objetivo é manter um fluxo automatizado de deploy para duas branches principais: main e develop.

As atualizações do sistema e do banco de dados são realizadas de forma automatizada:

- Branch develop: Atualizações são acionadas automaticamente ao realizar merges via Pull Request (PR) ou por push.

- Branch main: Atualizações são agendadas diariamente às 21:00 horas.

Foi configurado um único banco de dados e servidor para atender ambas as branches, gerenciando suas diferenças através de processos bem definidos.

### Estrutura do Projeto
- Servidor de Deploy: Utilizamos o Firebase Hosting para hospedar as páginas HTML de ambas as branches.
- Banco de Dados: Utilizamos o Supabase como banco de dados PostgreSQL, configurado para aceitar migrações separadas para cada branch.
- Migrações: Implementadas com a biblioteca Knex.js, que gerencia as alterações no banco de dados, garantindo que apenas as migrações pendentes sejam executadas.
- CI/CD: Configurado utilizando GitHub Actions para gerenciar as pipelines e realizar o deploy automatizado.

### Requisitos Atendidos
# Branches principais (main e develop)
Merges permitidos apenas via PR.

Atualizações do sistema e banco de dados automatizadas para ambas as branches.
## Deploy Automático
Branch develop: Deploy automático acionado por PR.

Branch main: Deploy automático agendado diariamente às 21:00 horas.

## Banco de Dados

Utilização de um único banco com controle de migrações separado para cada branch.

Histórico das migrações armazenado para evitar conflitos.
## Documentação e Configuração

Repositório documentado para que outros desenvolvedores possam dar manutenção nos workflows.

### Ferramentas Utilizadas
- Supabase: Banco de dados PostgreSQL para armazenar e gerenciar os dados.
- Firebase Hosting: Hospedagem das páginas HTML estáticas para as branches main e develop.
- Knex.js: Para gerenciar as migrações do banco de dados, com scripts para criação, aplicação e rollback de migrações.
- GitHub Actions: Configuração das pipelines de CI/CD para automação de deploys

### Configuração do Ambiente
## Clonar o Repositório
git clone https://github.com/seu-usuario/seu-repositorio.git  

cd seu-repositorio  

code .

## Instalar Dependências
npm install  

## Configurar o Banco de Dados

- Criar um projeto no Supabase.
- Atualizar as credenciais no arquivo knexfile.js.

## Configurar o Firebase Hosting

- Criar um site no Firebase (uma para a main e outra para a develop).
- Configurar o CLI do Firebase e conectar o projeto aos sites.

## Criar as migrações locais
npx knex migrate:make <nome do arquivo> 

## Executar as migrações
npx knex migrate:latest --env production (main)
npx knex migrate:latest --env development (develop)

### Workflows
## Workflow develop.yml
Gatilho: Pull Requests na branch develop.

Ações:
- Instalar dependências.
- Executar migrações pendentes para o banco de dados.
- Fazer deploy da página HTML no Firebase (site develop).

## Workflow main.yml
Gatilho: Agendado diariamente às 21:00 horas (CRON).

Ações:
- Instalar dependências.
- Executar migrações pendentes para o banco de dados.
- Fazer deploy da página HTML no Firebase (site main ou develop).

### Observações
- Migrações no Banco: Certifique-se de criar as migrações adequadas com Knex.js para alterações no esquema de dados.
- Gerenciamento de Configurações: Atualize as credenciais e chaves API no GitHub Secrets para manter segurança no processo de CI/CD.
- Branches Adicionais: Branches fora de main e develop não disparam pipelines.

### Contato
Em caso de dúvidas ou sugestões, entre em contato pelo GitHub ou pelo e-mail: mgbergmann@ucs.br.

Autor: Mathias Guterres Bergmann
GitHub: MathiasBergz
