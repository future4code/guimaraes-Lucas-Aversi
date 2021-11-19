// EXERCICIO 19/11

// EXERCICIO DE INTERPRETAÇÃO DE CODIGO

//1 A - A função multiplica a variável por 5, logo os resultados do console serão 10 e 50 respectivamente
//  B - Não seria impresso nada tendo em vista que função foi chamada mas sem exibição no log ???

//2 A - A função recebe um texto do usuário, converte esse texto para letras minúsculas e devolve um booleano indicando se o texto contem determinada palavra "cenoura"
//  B - i = True
//      ii= True
//      iii=True (pensei que seria false, mas ao rodar para verificar reparei que ja que a função converte para minuscula e na teoria "cenouras", inclui "cenoura", provavelmente por isso deu true no log )

//EXERCICIO DE ESCRITA DE CODIGO

//1 A-
{function dadosPessoais (){
    return (`Eu sou Lucas, tenho 31 anos, moro em Itapecerica da Serra, sou secretário escolar`)}
    dadosPessoais()
    console.log (dadosPessoais())}
    
    //  B-
    
    
    {function dadosPessoais (nome, idade, cidade, ocupação) {
     let retorno = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, sou ${ocupação} `)
     return (retorno)}
     dadosPessoais();
     console.log (dadosPessoais("Lucas", 31, "Itapecerica da Serra", "secretário escolar"))}
    
    // 2 A-
    {let soma = (n1, n2) =>{
      return n1+n2}
    
      console.log (soma(4,5))}
    
    //  B-
    {let primeiroMaior = (n1, n2) => {
      return (n1 >= n2)}
      console.log (primeiroMaior(2, 3))}
    
    //  C-
    
    {let parImpar = (n1) => {
      return (n1%2)}
      console.log (parImpar(2))}
    
    // D-
    
    { let tamanhoEMaiuscula = (string) =>{
      return `${string.length} ${string.toUpperCase()}`}
      console.log(tamanhoEMaiuscula("lucas ricardo de freitas aversi"))}
    
    //3 A-
     
    
     {let soma = (n1, n2) =>{
      n1 = Number(prompt("insira o primeiro valor"))
      n2 = Number(prompt("insira o segundo valor"))
      return (n1+n2)}
      console.log (soma())}
    
    //  B-
    {let subtração = (n1, n2) =>{
      n1 = Number(prompt("insira o primeiro valor"))
      n2 = Number(prompt("insira o segundo valor"))
      return (n1-n2)}
      console.log (subtração())}
    
    //  C-
    {let multiplicação = (n1, n2) =>{
      n1 = Number(prompt("insira o primeiro valor"))
      n2 = Number(prompt("insira o segundo valor"))
      return (n1*n2)}
      console.log (multiplicação())}
    
    //  D-
    {let divisão = (n1, n2) =>{
      n1 = Number(prompt("insira o primeiro valor"))
      n2 = Number(prompt("insira o segundo valor"))
      return (n1/n2)}
      console.log (divisão())}
    
    // DESAFIO
    
    //1  A-
    let função1 = (a) => {
        return console.log (a)
      }
      //   B-
      let função2 = (b, c) =>{
      let soma = b+c
      função1(soma)}
      (função2(2, 5))
    
    //2
    
    let hipotenusa = (n1, n2) =>{
      n1 = Number(prompt("insira o valor do primeiro cateto"))
      n2 = Number(prompt("insira o valor do segundo cateto"))
      let quadradoDosCatetos = (n1*n1)+(n2*n2)
      return (Math.sqrt(quadradoDosCatetos))}
      console.log (hipotenusa())