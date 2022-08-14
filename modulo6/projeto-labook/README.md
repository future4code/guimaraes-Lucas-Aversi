### ~PROJETO LABOOK~

O que é?

*Aplicação backend API REST desenvolvida em node.js para gerenciamento de rede social utilizando:*

*-> TypeScript*
*-> Express*
*-> UUID*
*-> Moment*
*-> Arquitetura 3 camadas*

O que faz?  

*É possivel gerenciar o básico de uma rede social como criar um usuário, pegar a lista de usuários, criar um post, pegar todos os posts ou apenas filtrando por id, fazer uma amizade ou desfazer uma amizade Segue documentação sobre como utilizar a API. A mesma também pode ser encontrada no arquivo REQUEST.REST*

A implementar 

*Pegar feed dos posts dos amigos*

Documentação da API

*//_________________________________________USER ENDPOINTS______________________________________//*

  *//1 - GET ALL USERS*

GET     *http://localhost:3003/users/all*
###

  *// 2 - CREATE NEW USER*

POST *http://localhost:3003/users/create*
Content-Type: application/json

{
    *"name"*: "liliane aparecida",
    *"email"*: "lilianeap@email.com",
    *"password"*: "liliane"
}

####
*//_________________________________________POST ENDPOINTS______________________________________//*

  
  *//1 - MAKE A POST*

POST *http://localhost:3003/posts/create*
Content-Type: application/json

{
   *"photo"*: "liliane.jpg",
   *"description"*: "trabalhando na em acácia",
   *"type"*: "normal",
   *"author_id"*:"36fa5aaa-8697-4b69-a2e6-32abc2a4e78c"
}
###

  *//2 - GET ALL POSTS*

GET *http://localhost:3003/posts/all*
###

  *//2.1 - GET POST BY ID*

GET 
*http://localhost:3003/posts/3/getPosts*
###

*//________________________________________FRIENDSHIP ENDPOINTS_____________________________________//*
 
  *//1 - MAKE FRIEND*

POST *http://localhost:3003/friendship/3/makeFriend*
Content-Type: application/json

{
    *"reciever"*: "5a7e728a-3afa-47d6-850d-0fba7786e6a7"
}
###

  *//2 - GET ALL FRIENDSHIP*

GET *http://localhost:3003/friendship/all*
###

  *//3 - DELETE FRIENDSHIP*

POST *http://localhost:3003/friendship/deleteFriend*
Content-Type: application/json

{
    *"idRequest"*: "4"
}
###


 