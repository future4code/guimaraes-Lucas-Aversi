//EXERCÍCIO 30/11

    // EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

    //  1 -    Pelo que entendi ele fará somas consecutivas dado o ultimo valor registrado percorrendo um loop de 0 a 4
    
    //  2  A - Irá imprimir os numeros da lista maiores que 18
    //     B - Apenas consegui acessar a quantidade total de elementos, não faço a menor ideia de como acessar um por um.
    
    //  3 - Seriam impressas 4 linhas, onde cada uma teria uma um asterisco +1 para cada linha, ex: 1* primeira linha, 2* segunda linha, 3* terceira linha e 4* quarta linha
    
    // EXERCÍCIO DE ESCRITA DE CÓDIGO

    //  1 -
                    let perguntaAoUsuário = Number(prompt("Quantos animaiszinhos de estimação você tem?"))
                    let arrayDePets = []
                    if (perguntaAoUsuário === 0){
                    console.log ("Que pena, você pode adotar um bichinho")}
                    else {
                    for (let loop = 0; loop < perguntaAoUsuário; loop++){ 
                    let nomeDosPets = prompt(`Digite o nome do seus pets`)
                    arrayDePets.push(nomeDosPets)

                  }
                } 
            
                    console.log(arrayDePets)
    // 2 - 
                    let arrayOriginal = [10, 15, 20, 25, 30, 35, 40, 45, 50]
    
    //      A-
                    for(let numero of arrayOriginal){
                    console.log(numero)
                }
    
    //      B- 
                    for (let numero of arrayOriginal){
                    let divisaoPorDez = numero/10
                    console.log (divisaoPorDez)
                }

    //      C-  
                    let arrayDePares = []
                    for (let numero of arrayOriginal){
                    if (numero%2 === 0){
                    arrayDePares.push(numero)
                    console.log (arrayDePares)
                }
                }
    //      D-

                    for (let indice = 0; indice < arrayOriginal.length; indice++) {

                    console.log(`O elemento do indice ${indice} é: ${arrayOriginal[indice]}`); 
                }

    //      E-  
                    let valorMenor = (Math.min(...arrayOriginal))
                    let valorMaior = (Math.max(...arrayOriginal))
                    console.log (`o menor valor do arrayOriginal é ${valorMenor}, e o maior valor é ${valorMaior}`)
                
            
            
            