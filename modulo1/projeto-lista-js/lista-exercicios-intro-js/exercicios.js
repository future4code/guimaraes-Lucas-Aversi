// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = prompt ("insira o valor da altura")
  let largura = prompt ("insira o valor da largura")
  console.log (altura*largura)}
  calculaAreaRetangulo();



// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = prompt ("insira o ano atual")
  let anoDeNascimento = prompt ("insira o ano de nascimento")
  console.log (anoAtual - anoDeNascimento)}
  imprimeIdade ();


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
let imc = (peso/(altura*altura))
 return (imc)}
   calculaIMC ();

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("insira seu nome")
  let idade = prompt("insira sua idade")
  let email = prompt("insira seu email")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt ("insira sua primeira cor favorita")
  let cor2 = prompt ("insira sua segunda cor favorita")
  let cor3 = prompt ("insira sua terceira cor favorita")
  let cores = [cor1, cor2, cor3]
  console.log (cores)}
  imprimeTresCoresFavoritas();

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return (string.toUpperCase())};
  retornaStringEmMaiuscula();

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let quantidadeDeVendas = (custo/valorIngresso)
  return (quantidadeDeVendas)}
 calculaIngressosEspetaculo()

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let retorno = (string1.length === string2.length)
  return (retorno)}
  checaStringsMesmoTamanho();

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]}
  retornaPrimeiroElemento()


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
let i = array[0]
array[0] = array[array.length -1]
array[array.length - 1] = i
return (array)}
trocaPrimeiroEUltimo ()

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let comparação = string1.toLocaleLowerCase() === string2.toLocaleLowerCase()
  return (comparação)}
  checaIgualdadeDesconsiderandoCase();

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  // nao consegui pensar em nada com o conhecimento atual. Até domingo tentarei aprender o if 

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
   // nao consegui pensar em nada com o conhecimento atual. Até domingo tentarei aprender o if 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let idade = prompt("tem mais de 18 anos?")
  let ensinoMédio = prompt("tem ensino médio completo")
  let horário = prompt("tem disponibilidade de horário")
  let validação = (idade === "sim")
  let validação2 = (ensinoMédio === "sim")
  let validação3 = (horário === "sim")
  let validação4 = (validação===validação2===validação3)
  console.log (validação4)}
  checaValidadeInscricaoLabenu()