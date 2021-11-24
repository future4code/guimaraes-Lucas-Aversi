// EXERCÍCIO 23/11

  //EXERCÍCIOS DE INTERPRETAÇÃO DE CODIGO
      //1 - A => o primeiro log aparecerá Matheus Nachtergaele (o indice 0 do elenco), o segundo log "Virginia Cavendish" (o ultimo índice do elenco) e o terceiro log aparecerá: canal: "Globo", horario: "14h" (o índice 2 de transmissõesHoje)
      //2 - A => o primeiro log aparecerá as propriedades e valores do objeto cachorro, o segundo log aparecerá as propriedades e valores do objeto gato, e o terceiro log aparecerá as propriedades e valores do objeto tartaruga.
      //  - B => a sintaxe de 3 pontos serve para usar o comando spread, este tem por função copiar as propriedades de um determinado objeto para que possamos edita-la sem mexer no objeto principal.
      //3 - A => o primeiro log, devolverá um valor booleano (false), o segundo logo devolverá um valor undefined tendo em vista que a variável/chave altura, não foi declarada.
      //  - B => o valor impresso no console, é a chave importada de dentro da função, a função foi chamada e devolveu os valores de chave

  //EXERCICIO DE ESCRITA DE CÓDIGO
    //1 - A
    const pessoa = {
        nome: "Lucas Aversi",
        apelidos: ["Aversi", "Cold", "Biro-Biro"]
      }
      const funçãoSaída = ( pessoa ) =>{
      const frase = `Eu sou o ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
      return frase
      }
      console.log (funçãoSaída(pessoa))
      
      // - B

      const novaPessoa = {
          ...pessoa, apelidos: ["apelido1", "apelido2", "apelido3"]
      }
      console.log (funçãoSaída(novaPessoa))

    //2 - A
    const persona = {
        nome: "Renata",
        idade: 40,
        profissão: "Diretora Escolar"
    }

    const persona2 = {
        nome: "Dona B",
        idade: 60,
        profissão: "Auxiliar de Serviços Escolares"
    }

    //      - B

    const funçãoRetorno = (persona, persona2)=>{
        const retorno = `[ ${persona.nome}, ${persona.nome.length},
        ${persona.idade}, ${persona.profissão}, ${persona.profissão.length}] e também  [ ${persona2 .nome}, ${persona2 .nome.length},
        ${persona2.idade}, ${persona2.profissão}, ${persona2.profissão.length}] `
        return retorno}
                
                console.log (funçãoRetorno(persona, persona2))

    //3 - 

        let carrinho = []

        let abacaxi = {
        nome: "Abacaxi",
        disponibilidade: true}

        let banana = {
        nome: "Banana",
        disponibilidade: true}

        let cacau = {
        nome: "Cacau",
        disponibilidade: true}

        
        const sacolao = (fruta) => {
        carrinho.push (fruta)
        return carrinho}
        console.log (sacolao(abacaxi),(banana), (cacau))
        console.log (typeof(carrinho))

//Desafio
    //1 - A
    
    let dadosDoUsuario = () =>{
        nome =  prompt("insira seu nome")
        idade = prompt("insira sua idade")
        profissao = prompt ("insira sua profissao")
        let compiladoUsuario = (nome, idade, profissao)
        return compiladoUsuario
    }
    let objetoFinal = compiladoUsuario()
    console.log (objetoFinal)
        

    //   -B

    let filme1 = {
        nome: "A volta dos que não foram",
        anoDeLançamento: "2021"
    }
    let filme2 = {
        nome: "As tranças do rei careca",
        anoDeLançamento: "2020"
    }
    let comparação = (a, b) =>{
        const comparação = (a < b)
        

        return comparação}
    
        let comparação2 = (a, b) =>{
            
            const comparação2 = (a === b)
    
            return comparação2
    }
    comparação()
    console.log (comparação(filme1.anoDeLançamento, filme2.anoDeLançamento))
    console.log (comparação2(filme1.anoDeLançamento, filme2.anoDeLançamento))

