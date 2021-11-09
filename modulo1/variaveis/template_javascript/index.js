//EXERCICÍOS 09/11/2021

//Exercícios de interpretação de código
    
        //Exercício 1 - Tendo em vista que foi usada a variável let que permite alterar o valor da variável posteriormente, obteremos os seguintes resultados no log 10
        //                                                                                                                                                           10 5

        //Exercício 2 - Algum tipo de erro já que let c não foi declarado.

        //Exercício 3 - o programa executa a média de horas diárias trabalhadas divido pelo salário diário para descobrir o salário-hora. Poderíamos trocar a variável p por horasDiariaTrabalhadas e t por salárioDiário

//Exercícios de interpretação de código

        //exercícío 1 -

        var nome
        let idade
        console.log (typeof nome, typeof idade)
        // obtivemos o valor undefined tendo em vista que nao foram declarados valores para as variaveis
        nome = prompt ("Qual é o seu nome?")
        idade = prompt ("Qual é a sua idade?")
        console.log (typeof nome, typeof idade)
        //após atribuir um valor à variável pelo prompt notamos a troca do tipo da variável de undefined para string
        console.log ("Olá", nome, "você tem", idade, "anos.")

        //Exercício 2

        var cafeDaManha = false
        var almoço = true
        var janta = false
        console.log ("Voce tomou café da manhã?", cafeDaManha)
        console.log ("Voce almoçou?", almoço)
        console.log ("Voce jantou?", janta)

        // EXERCICIO 3

        let a = 10
        let b = 25

        // aqui faremos uma lógica para trocar os valores

        let c = a;
        a=b
        b=c
        c=a

        console.log ("o novo valor de a é", a) // novo valor de a
        console.log ("o novo valor de b é", b) // novo valor de b



