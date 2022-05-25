
function operaçõesComNumeros(num1:number, num2:number) {
    const soma = num1 + num2
    const subtração = num1 - num2
    const multiplicação = num1 * num2
    const divisao = num1 / num2

    return(`A soma de '${num1}' e '${num2}' é '${soma}', A subtração de '${num1}' e '${num2}' é '${subtração}', A multiplicação de '${num1}' e '${num2}' é '${multiplicação}' e a divisão de '${num1}' e '${num2}' é '${divisao}' `)
  }
  
  console.log(operaçõesComNumeros(5,2))