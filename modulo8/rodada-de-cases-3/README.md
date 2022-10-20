### POKEMON - POKEMON GO API

O que é?

*Aplicação backend em Node utilizando Express e Knex para manuseio de API REST*


O que faz?  

*É possivel listar todos os pokemons, ou pega-los por ID. também é possível filtra-los e ordena-los. Paginação está disponpivel. Consulte a documentação anexa*

Como rodar o projeto?

    Clone o repositório 
    Rode "npm i" para instalar as dependências.
    Configure as variaveis de ambiente para receber o banco de dados.
    Rode "npm run migrations para criar e popular o banco de dados.
    Rode "npm run dev" para começar utilizar a API

    Have Fun :D

Documentação da API


//POKEMON GO - API DOCUMENTATION

// 1 - BASIC ENDPOINTS
// 1.1 - Get all pokemons

GET http://localhost:3003/pokemon
Content-Type: application/json

###

// 1.2- Get pokemon by id

GET http://localhost:3003/pokemon/id/1500
Content-Type: application/json

###


// 2 - Poke query - Our API supports some features. You can filter, sort and paginate .

// 2.1 - Filtering - its possible filter pokemons by name/type/generation using queries

GET http://localhost:3003/pokemon?name=dra&type=dragon&generation=1
Content-Type: application/json
###

// 2.2 - Sorting  - is also possible sort by id,name,generation,type using query.


GET http://localhost:3003/pokemon?name=dra&type=dragon&generation=1&sort=name
Content-Type: application/json
###

// 2.2 - Ordering  - is also possible order by asc or desc. Asc set as default value.


GET http://localhost:3003/pokemon?name=dra&type=dragon&generation=1&sort=name&order=desc
Content-Type: application/json
###

//2.3 Pagination - our API suports pagination using size for how much itens, and page to navigate between


GET http://localhost:3003/pokemon?size=20&page=2
Content-Type: application/json

###


