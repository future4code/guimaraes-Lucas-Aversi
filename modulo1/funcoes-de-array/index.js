// EXERCÍCIO 02/12

    // EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

        //1 - Vai retornar um array contendo as propriedades do array de objetos usuário

        //2 - Vai retornar um array com os valores do item nome

        //3 - Vai retornar um array filtrando o que seja diferente de Chijo

    // EXERCÍCIO DE ESCRITA DE CÓDIGO

        //1 - 
    const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
    ]

        // A

    let nomeDoguinhos = pets.map ((item, index, array) =>{
    return item.nome})
    console.log (nomeDoguinhos)

        //B

    let apenasSalsichas = pets.filter ((item, index, array) =>{
    return item.raca === "Salsicha"
    })
    console.log (apenasSalsichas)

        //C

    let cupomDescontoPoodle = pets.filter ((item, index, array) => {
    return item.raca === "Poodle" 
    })
    cupomDescontoPoodle =  cupomDescontoPoodle.map ((item, index, array) =>{
    return item.nome})
    for (let indice=0; indice <cupomDescontoPoodle.length; indice++)


    console.log (`Parabéns, você ganhou 10% de desconto para tosar a/o seu/sua ${cupomDescontoPoodle[indice]} `)

        //2
        const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]      

        //A

    let arrayDeItens = produtos.map((item, index, array)=>{
    return item.nome
    
    })
    for (let indice =0; indice <produtos.length; indice++)
    console.log (arrayDeItens[indice])
    
    //B
    
    let arrayDesconto = produtos.map((item, index,array)=>{
    return item.preco*0.95
    })
    
    for (let indice =0; indice <produtos.length; indice++)
    console.log (`nome: ${arrayDeItens[indice]}, preço ${arrayDesconto[indice]}`)
    
    //C
    
    let arrayBebidas = produtos.filter((item, index, array)=>{
    return item.categoria.includes("Bebidas")})
    console.log (arrayBebidas)
    
    //D
    
    let arrayYpe = produtos.filter((item, index, array)=>{
    return item.nome.includes("Ypê")})
    console.log (arrayYpe)
    
    //E
    let produtoYpe = arrayYpe.map((item, index, array) => {
    return item.nome
    })
    
    let precoYpe = arrayYpe.map((item, index, array) => {
      return item.preco
    })
    
    for (let indice = 0; indice<arrayYpe.length; indice++)
    console.log (`Compre ${produtoYpe[indice]} por ${precoYpe[indice]}`)

    //DESAFIO

    const pokemons = [
        { nome: "Bulbasaur", tipo: "grama" },
        { nome: "Bellsprout", tipo: "grama" },
        { nome: "Charmander", tipo: "fogo" },
        { nome: "Vulpix", tipo: "fogo" },
        { nome: "Squirtle", tipo: "água" },
        { nome: "Psyduck", tipo: "água" },
     ]
     
     //A
     
     let ordemAlfabetica = pokemons.map((item, index, array)=>{
     return item.nome
     })
     console.log (ordemAlfabetica.sort())
     
     //B
     let tipoPokemon = pokemons.map ((item, index, array)=>{
     return item.tipo
     })
     let semRepeticao = [...new Set(tipoPokemon)]
     console.log (semRepeticao)