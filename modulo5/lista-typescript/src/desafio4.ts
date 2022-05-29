const checaCpf = (numero:string)=>{
    const arraySeparado = numero.split("", numero.length)
       
    const numero1 = Number(arraySeparado[0])*10
    const numero2 = Number(arraySeparado[1])*9
    const numero3 = Number(arraySeparado[2])*8
    const numero4 = Number(arraySeparado[4])*7
    const numero5 = Number(arraySeparado[5])*6
    const numero6 = Number(arraySeparado[6])*5
    const numero7 = Number(arraySeparado[8])*4
    const numero8 = Number(arraySeparado[9])*3
    const numero9 = Number(arraySeparado[10])*2

    const dado1 = Number(arraySeparado[0])*11
    const dado2 = Number(arraySeparado[1])*10
    const dado3 = Number(arraySeparado[2])*9
    const dado4 = Number(arraySeparado[4])*8
    const dado5 = Number(arraySeparado[5])*7
    const dado6 = Number(arraySeparado[6])*6
    const dado7 = Number(arraySeparado[8])*5
    const dado8 = Number(arraySeparado[9])*4
    const dado9 = Number(arraySeparado[10])*3
    const dado10 = Number(arraySeparado[12])*2

    const checa1 = Number(arraySeparado[12])
    const checa2 = Number(arraySeparado[13])    

    const somaValidador1 = numero1+numero2+numero3+numero4+numero5+numero6+numero7+numero8+numero9
    const somaValidador2 = dado1+dado2+dado3+dado4+dado5+dado6+dado7+dado8+dado9+dado10


    let validador1 = 11-(somaValidador1%11)
    let validador2 = 11-(somaValidador2%11)

    if (validador1 >=10){
         validador1 = 0
    }

    if (validador2 >=10){
         validador2 = 0
    }

    if (validador1 !== checa1 || validador2 !==checa2){
        return "CPF Inválido"

    }else{
        return "CPF Válido"
    } 
}

console.log(checaCpf("145,382,206-20"))