//EXERCICIO 11/11

    //EXERCICIO DE INTERPRETAÇÃO

    //1- a> false já que F+V em (&&) = F
    //   b> false já que se envolver algum F em (&&) resulta em false,
    //   c> true já que se envolver algum V em (||) Resulta em true
    //   d> o tipo é um booleano.

    //2- O fato de soma estar concatenando duas strings ao invés de dois number.
    
    //3 - Codigo para solução do colega
    
    //    let primeiroNumero = Number (prompt("Digite um numero!"))
    //    let segundoNumero = Number(prompt("Digite outro numero!"))
    //    const soma = (primeiroNumero + segundoNumero)
    //    console.log(soma)

    //EXERCÍCIO DE ESCRITA DE CÓDIGO
    
    //1- 
        {let nome = prompt("Qual é o seu nome?")
         let idade = Number(prompt("Qual é a sua idade?"))
         let amigoIdade = Number(prompt("Qual é a idade do seu amigo?"))
         console.log ("A sua idade é maior que a do seu amigo?", idade > amigoIdade)
         console.log ("A diferença de idade é", idade-amigoIdade)}
    
    //2- 
        {let numeroPar = Number(prompt("Insira um número par")) //a
        console.log (numeroPar%2)}                              //b

        //o resto dos números pares sempre são 0               //c
        //o resto dos números ímpares sempre são 1}             //d

    //3-
        {let idadeEmAnos = Number(prompt("Insira a sua idade em anos"))
        console.log (idadeEmAnos*12) //meses
        console.log (idadeEmAnos*365) //dias
        console.log (idadeEmAnos*8760)} //horas
    
    //4-
       {let firstNumber = Number(prompt("Insira um número"))
        let secondNumber = Number(prompt("Insira um outro número"))
        console.log (firstNumber > secondNumber)
        console.log (firstNumber === secondNumber)
        console.log (firstNumber/secondNumber) 
        console.log (secondNumber/firstNumber)}

    //DESAFIOS
    //1-
    //(KELVIN) = (GRAUS_CELSIUS) + 273,15
    //(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
    //(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

    
        {console.log ((77 - 32) * 5/9 + 273.15)   //a
        console.log ((80)*(9/5) + 32)            //b
        console.log ((30)*9/5 + 32)              //c
        let a = ((30)*9/5 + 32)                  //c
        console.log ((a - 32)*(5/9) +(273.15))   //c
        let valorParaConverter = Number(prompt("Digite a temperatura em ºC")) //d
        console.log ("A temperatura convertida é", (valorParaConverter)*(9/5) + 32, "graus ºF") //d
        console.log ("A temperatura convertida é", (valorParaConverter)+273,15, "graus ºK")} //d

    //2-

       {let quiloWattHora = Number("0.05")
        let valor = (prompt("Insira a quantidade de quilowatts consumidos"))
        let valorDaConta = (valor*quiloWattHora)
        console.log ("o valor gasto em", valor, "quiloWattHora é de:", valorDaConta,"reais")

        console.log ("o valor gasto em 280 quilowhatts é de:", 280 * quiloWattHora, "reais") //a
        console.log ("o valor gasto em 280 quilowhatts com 15% é de:",(280 * quiloWattHora) - (280 * quiloWattHora * 0.15), "reais")} //b
    
    //3-
        //a
       {let a = Number(prompt("Insira o valor em libras (lb)"))                           
        let conversãoLibraKilograma = (a/2.205)                                           
        console.log ("A conversão do valor", a, "em libras é:", conversãoLibraKilograma, "kg")  
        console.log ("20 libras equivalem a", 20/2.205, "kg")}                                  

        //b
       {let b = Number(prompt("Insira o valor em onça (oz)"))                           
        let conversãoOnçaKilograma = (b/35.274)                                           
        console.log ("A conversão do valor", b, "oz em kilogramas é:", conversãoOnçaKilograma, "kg")  
        console.log ("10.5 oz equivalem a", 10.5/35.274, "kg") }                                  

        //c
       {let c = Number(prompt("Insira o valor em milhas (mi)"))                           
        let conversãoMilhasMetro = (c * 1609.34)                                           
        console.log ("A conversão do valor", c, "em metros é:", conversãoMilhasMetro, "m")  
        console.log ("100 milhas equivalem a", 100 * 1609.34, "m") }                       

        //d
       {let d = Number(prompt("Insira o valor em pés (ft)"))
        let conversãoPésMetro = (d/3.281)
        console.log ("A conversão do valor", d, "em metros é:", conversãoPésMetro, "m")
        console.log ("50 pés equivalem a", 50 / 3.281, "m")}

        //e
       {let e = Number (prompt("Insira o valor em galões (gal)"))
        let conversãoGalãoLitro = (e*3.78541)
        console.log ("A conversão do valor", e, "em litros é:", conversãoGalãoLitro, "l")
        console.log ("103,56 gal equivalem a", 103.56 * 3.78541, "l")}

        //f
       {let f = Number (prompt("Insira o valor em xícara (xic)"))
        let conversãoXícaraLitro = (f / 3.52)
        console.log ("A conversão do valor", f, "em litros é", conversãoXícaraLitro, "l")
        console.log ("450 xícaras equivalem a", 450/3.52, "l")}

        //g -> feito em todos anteriores