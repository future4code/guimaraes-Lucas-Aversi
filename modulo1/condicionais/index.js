// EXERCÍCIO 25/11/2021

    // EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
        //1 A - O Código realiza um teste de par ou ímpar
        //  B - Números pares passam no teste
        //  C - Números ímpares não passam no teste

        //2 A - O código acima serve para pesquisar uma determinada fruta e saber seu preço
        //  B - O preço da fruta Maçã é 2,25 R$
        //  C - A fruta Pêra seria retornada como valor default
        
        //3 A - A primeira linha está recebendo pelo prompt uma string que vai ser convertida para número.
        //  B - Se o usuário digitar 10 o log retorna que o número passou no teste, se digitar -10 nao retorna nada pq o else não foi definido.    
        //  C - Sim, a const mensagem está dentro de um escopo local, e tem um log tentando acessar ela de fora desse escopo.
        
        
   /*  // EXERCÍCIO DE ESCRITA DE CÓDIGO
        //1 A
            const usuário = {
                nome: prompt("insira seu nome"),
        //  B        
                idade: Number(prompt("insira sua idade"))
            }
        //  C
            if (usuário.idade >= 18){
                console.log ("Você pode dirigir")

            }
            else {
                console.log ("Você não pode dirigir")
            }
        
        //2 
            
            let turnoQueEstuda = prompt ("Insira o turno que vc estuda: M para matututino, V para vespertino e N para noturno").toLocaleUpperCase()
            if (turnoQueEstuda === 'M') {
                console.log ('Bom dia!')
            }
            else if(turnoQueEstuda === 'V'){
                console.log('Boa tarde!')
            }
            else if (turnoQueEstuda === "N"){
                console.log ('Boa noite!')
            }
            else{
                console.log ("Turno inválido")
            }
        
        //3
            
            let turnoQueEstudaSwitchCase = prompt ("Insira novamente o turno que vc estuda: M para matututino, V para vespertino e N para noturno").toLocaleUpperCase()
            switch(turnoQueEstudaSwitchCase){
                case "M":
                    console.log ('Bom dia!')
                break
                case "V":
                    console.log ('Boa tarde!')
                break
                case "N":
                    console.log ('Boa noite!')
                break
                default:
                    console.log ('Turno inválido')
            }
        
        //4
        let generoEPreço = {
            genero: prompt("insira o genero do filme"),
            preço: Number(prompt("insira o valor do filme"))}
        
        let condição = generoEPreço.genero === "fantasia"
        let condição2 = generoEPreço.preço <= 15
        
        if (condição && condição2 === true){
            let lanche = prompt ("Gostaria de comprar algum lanchinho")
            console.log (`Bom filme e aproveite o (a) seu (sua) ${lanche} `)
        }
        
        else{
           console.log ("escolha outro filme :C")
            } */
        
    //DESAFIOS      
            
        //1 INSERIDO NO EXERCÍCIO 4 

        //2 
        let nome = prompt("insira seu nome completo")
        let tipoDeJogo = prompt("insira o tipo de jogo que gostaria de assistir: IN para jogos internacionais ou DO para jogos domésticos").toUpperCase()
        let etapaDoJogo = prompt ("insira a etapa do jogo que gostaria de assistir: SF para semifinal, DT para decisão de terceiro lugar ou FI para final").toUpperCase()
        let categoriaDoJogo = Number(prompt("insira um das catogrias: 1, 2, 3 ou 4"))
        let quantidadeDeIngressos = Number(prompt("insira a quantidade de ingresso que você quer comprar"))
        let valorDoIngresso = (tipo, etapa, categoria) =>{
         
            let valorDoIngresso = (tipo, etapa, categoria) =>{
                if (tipo === "DO" && etapa === "SF" && categoria === 1)
                    return tabelaDePreçosSF[0]
            }
                if (tipo === "DO" && etapa === "SF" && categoria === 2){
                    return tabelaDePreçosSF[1]
            }
                if (tipo === "DO" && etapa === "SF" && categoria === 3){
                    return tabelaDePreçosSF[2]
            }
                if (tipo === "DO" && etapa === "SF" && categoria === 4){
                    return tabelaDePreçosSF[3]
            }
                if (tipo === "DO" && etapa === "DT" && categoria === 1){
                    return tabelaDePreçosDT[0]
            }
                if (tipo === "DO" && etapa === "DT" && categoria === 2){
                    return tabelaDePreçosDT[1]
            }
                if (tipo === "DO" && etapa === "DT" && categoria === 3){
                    return tabelaDePreçosDT[2]
            }
                if (tipo === "DO" && etapa === "DT" && categoria === 4){
                    return tabelaDePreçosDT[3]
            }    
                if (tipo === "DO" && etapa === "FI" && categoria === 1){
                    return tabelaDePreçosFI[0]
            }
                if (tipo === "DO" && etapa === "FI" && categoria === 2){
                    return tabelaDePreçosFI[1]
            }   
                if (tipo === "DO" && etapa === "FI" && categoria === 3){
                    return tabelaDePreçosFI[2]
            }
                if (tipo === "DO" && etapa === "FI" && categoria === 4){
                    return tabelaDePreçosFI[3]
            }
            //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                if (tipo === "IN" && etapa === "SF" && categoria === 1){
                    return tabelaDePreçosSF[0]/4.10
            }
                if (tipo === "IN" && etapa === "SF" && categoria === 2){
                    return tabelaDePreçosSF[1]/4.10
            }
                if (tipo === "IN" && etapa === "SF" && categoria === 3){
                     return tabelaDePreçosSF[2]/4.10
            }
                if (tipo === "IN" && etapa === "SF" && categoria === 4){
                    return tabelaDePreçosSF[3]/4.10
            }
                if (tipo === "IN" && etapa === "DT" && categoria === 1){
                    return tabelaDePreçosDT[0]/4.10
            }
                if (tipo === "IN" && etapa === "DT" && categoria === 2){
                    return tabelaDePreçosDT[1]/4.10
            }
                if (tipo === "IN" && etapa === "DT" && categoria === 3){
                    return tabelaDePreçosDT[2]/4.10
            }
                if (tipo === "IN" && etapa === "DT" && categoria === 4){
                    return tabelaDePreçosDT[3]/4.10
            }    
                if (tipo === "IN" && etapa === "FI" && categoria === 1){
                    return tabelaDePreçosFI[0]/4.10
            }
                if (tipo === "IN" && etapa === "FI" && categoria === 2){
                    return tabelaDePreçosFI[1]/4.10
            }   
                if (tipo === "IN" && etapa === "FI" && categoria === 3){
                    return tabelaDePreçosFI[2]/4.10
            }
                if (tipo === "IN" && etapa === "FI" && categoria === 4){
                    return tabelaDePreçosFI[3]/4.10 
            }
        }
        
        
        let tabelaDePreçosSF = [1320.00, 880.00, 550.00, 220.00]
        let tabelaDePreçosDT = [660.00, 440.00, 330.00, 170.00]
        let tabelaDePreçosFI = [1980.00, 1320.00, 880.00, 330.00]
            
            
            console.log (`---Dados da compra---`)
            console.log (`Nome do cliente: ${nome}`)
            console.log (`Tipo de jogo: ${tipoDeJogo}`)
            console.log (`Etapa do jogo ${etapaDoJogo}`)
            console.log (`Categoria: ${categoriaDoJogo}`)
            console.log (`Quantidade de ingressos: ${quantidadeDeIngressos}`)
            console.log (`---Valores---`)
            console.log (`Valor do ingreso: ${valorDoIngresso(tipoDeJogo, etapaDoJogo, categoriaDoJogo)} $`)
            console.log ("Valor total:", valorDoIngresso(tipoDeJogo, etapaDoJogo, categoriaDoJogo)*(quantidadeDeIngressos), "$")
