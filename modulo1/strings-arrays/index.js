//EXERCÍCIO 17/11/2021

            //exercicio interpretação 1

//a - Tendo em vista que a variável array foi declarado mas nao atribuido valor receberemos o valor undefined
//b - A variável array foi declarada null, sendo assim o log terá valor null
//c - Agora que o array foi declarado com seus "itens" , obteremos a quantidade de "itens" dentro do array pelo log. (Propriedade length)
//d - O log retornará o índice 0 do array (Primeiro item)
//e - Só analisando nao consegui resolver, tive que rodar o codigo e percebi que foi trocado próximo item a partir do índice indicado, [4 pelo 19].
//f - Foi criada uma variavel que devolve um numero do array a partir do indíce setado. No exemplo partindo do índice 0 contamos os 6 proximos itens do array para determinar o valor que será devolvido pelo log (9)

//EXERCICIO DE ESCRITA DE CODIGO
//1a
let nomeDoUsuário = prompt ("insira seu nome")
let emailDoUsuário = prompt ("Insira seu email")
console.log (`o email ${emailDoUsuário} foi cadastrado com sucesso. Seja bem vindo (a) ${nomeDoUsuário}`)

//2a

let array = ["hamburguer", "coxinha", "feijoada", "esfiha", "sopa"]
//b
console.log (array)
//c
let comidaFavoritaUsuário = prompt("insira a sua comida favorita")
array[0+1] = comidaFavoritaUsuário
console.log (array)

//3a

let listaDeTarefas = []

//b

let tarefa1 = prompt ("insira uma tarefa que vc precise realizar no dia a dia")
let tarefa2 = prompt ("insira uma tarefa que vc precise realizar no dia a dia")
let tarefa3 = prompt ("insira uma tarefa que vc precise realizar no dia a dia")
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

//c

console.log (listaDeTarefas)
//d
let i = Number (prompt("insira um índice de 0 a 2"))
//e
listaDeTarefas.splice(i, 1)

//f
console.log (listaDeTarefas)

//desafio
//1
let frase = prompt("insira uma frase")
let resultado = frase.split(" ")
console.log (resultado)

//2
let array2 = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let index = array2.indexOf("Abacaxi")
console.log (index, array2.length)