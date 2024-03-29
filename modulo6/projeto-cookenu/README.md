### PROJETO COOKENU

O que é?

*Aplicação backend API REST desenvolvida em node.js para gerenciamento de aplicativo culinário utilizando:*

*-> TypeScript*
*-> Express*
*-> UUID*
*-> Bcrypt*
*-> JsonWebToken*
*-> Arquitetura 3 camadas*

O que faz?  

*Gerencia o básico de um app culinário, onde é possível se cadastrar e depois fazer login, as senhas são encripitadas ao mandar para o banco de dados através da lib Bcrypt, após ter criado um usuário é possível criar receitas, consultar receitas por id, consultar usuários por id, ver o proprio perfil. Endpoints são autenticados por token que é criado após o login. Segue documentação sobre como utilizar a API. A mesma também pode ser encontrada no arquivo REQUEST.REST*

A implementar 
*Seguir um usuário*
*Pegar feed das receitas dos seguidores dos seguidores*


Documentação da API

*//_________________________________________USER ENDPOINTS______________________________________//*

*//1 - Signup* 

*//Its possible define users roles if wanted => "role":"admin". This information is optional and if none value was give by body, user will assume normal as role.*

POST *http://localhost:3003/users/signup*
Content-Type: application/json

{
   *"name"*: "coxinha e doquinha", 
   *"email"*: "doquinha2@gmail.com",
   *"password"*: "123456",
   *"role"*: "admin"
}

###

*// 2 - Login*

POST *http://localhost:3003/users/login*
Content-Type: application/json

{
   *"email"*: "doquinha2@gmail.com", 
   *"password"*: "123456"
}

###

*//3 - GET ALL USERS - needs role authorization if user is not an Admin, he cant access this feature.*

GET    *http://localhost:3003/users/all*
authorization: *eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBjNDdmODUyLTZmNWItNGE2Mi1iYWYzLWFkYmJhMjE2M2I5OSIsInJvbGUiOiJub3JtYWwiLCJpYXQiOjE2NjE2OTg4NjAsImV4cCI6MTY2MTcwOTY2MH0.MxVKXwFgjoaim3zVjJFBu20pHY_-u5h_N_3KzoIZ77g*
###

*//3.1 - GET USER BY ID (PROFILE)  - needs authorization.*

GET     *http://localhost:3003/users/2*
authorization: *eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBjNDdmODUyLTZmNWItNGE2Mi1iYWYzLWFkYmJhMjE2M2I5OSIsInJvbGUiOiJub3JtYWwiLCJpYXQiOjE2NjE2OTY4NjMsImV4cCI6MTY2MTcwNzY2M30.6vBgewaE7a2PTC0c6dPwTzqrWLTnfvTH3CcUB3bZFuU*

###

*//3.2 - GET OWN PROFILE - needs role authorization*

GET     *http://localhost:3003/users/profile*
authorization: *eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBjNDdmODUyLTZmNWItNGE2Mi1iYWYzLWFkYmJhMjE2M2I5OSIsInJvbGUiOiJub3JtYWwiLCJpYXQiOjE2NjE2OTY4NjMsImV4cCI6MTY2MTcwNzY2M30.6vBgewaE7a2PTC0c6dPwTzqrWLTnfvTH3CcUB3bZFuU*
###




*//_________________________________________RECIPES ENDPOINTS______________________________________//*

*//1 - GET ALL RECIPES - needs authorization.*

GET     *http://localhost:3003/recipes/all*
authorization: *eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBjNDdmODUyLTZmNWItNGE2Mi1iYWYzLWFkYmJhMjE2M2I5OSIsInJvbGUiOiJub3JtYWwiLCJpYXQiOjE2NjE2OTY4NjMsImV4cCI6MTY2MTcwNzY2M30.6vBgewaE7a2PTC0c6dPwTzqrWLTnfvTH3CcUB3bZFuU*


###

*//1.2 - GET RECIPE BY ID - needs authorization.*


GET     *http://localhost:3003/recipes/3*
authorization: *eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBjNDdmODUyLTZmNWItNGE2Mi1iYWYzLWFkYmJhMjE2M2I5OSIsInJvbGUiOiJub3JtYWwiLCJpYXQiOjE2NjE2OTY4NjMsImV4cCI6MTY2MTcwNzY2M30.6vBgewaE7a2PTC0c6dPwTzqrWLTnfvTH3CcUB3bZFuU*

###

*// 2 - CREATE NEW RECIPE - needs authorization*

POST *http://localhost:3003/recipes/create*
Content-Type: application/json
authorization: *eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBjNDdmODUyLTZmNWItNGE2Mi1iYWYzLWFkYmJhMjE2M2I5OSIsInJvbGUiOiJub3JtYWwiLCJpYXQiOjE2NjE2OTY4NjMsImV4cCI6MTY2MTcwNzY2M30.6vBgewaE7a2PTC0c6dPwTzqrWLTnfvTH3CcUB3bZFuU*

{
   *"title"*: "Frango Frito",
   *"description"*: "Frango frito crocante e sequinho",
   *"instructions"*: "cortar e fritar 3 kilos de frango. Servir com coquinha gelada",
   *"author_id"*: "1"
}

