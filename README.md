# Projeto StoreManager API

Projeto realizado durante módulo de Back-end do curso de desenvolvimento web da Trybe.

  <summary><strong>O que foi feito</strong></summary></br>

  Neste projeto desenvolvi uma API utilizando a arquitetura MSC (model-service-controller).

  A API construída é um sistema de gerenciamento de vendas no formato dropshipping em que será possível criar, visualizar, deletar e atualizar produtos e vendas.
  
  
  <summary><strong>:memo: Tecnologias utilizadas</strong></summary><br />

  - `Docker`;
  - `docker-compose`;
  - `Mysql`;
  - `Mocha`;
  - `Nyc`;
  - `Express`;


  <summary><strong>Como rodar o projeto</strong></summary></br>

  **Com Docker:**

  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. 

- `docker-compose up -d`
- `docker exec -it store_manager bash`
- `npm install`
- `npm run migration && npm run seed`
- `npm run debug`

**Localmente:**

**Necessita ter um banco de dados(MySql) instalado localmente**

- `npm install`
- `npm run migration && npm run seed`
- `npm run debug`
