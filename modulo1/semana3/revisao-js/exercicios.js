// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   return array.sort((a,b)=> a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   let arrayPares = []
   for ( numero of array){
      if (numero % 2 === 0)
         arrayPares.push(numero)
   }   
      return arrayPares
   
   
}




// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   let arrayParesQuadrado = []
   for ( numero of array){
      if (numero % 2 === 0)
         arrayParesQuadrado.push(numero*numero)
   }   
      return arrayParesQuadrado 
}

// EXERCÍCIO 06
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function retornaMaiorNumero(array) {
   return Math.max.apply (null, array)
        
  
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   let maiorNumero = 0
   let menorNumero = 0
   let maiorDivisivelPorMenor = 0
   let diferenca = 0

   if (num1 > num2){
      maiorNumero = num1
      menorNumero = num2
   }
   else{
      maiorNumero =num2
      menorNumero = num1
   }
   if (maiorNumero%menorNumero === 0){
      maiorDivisivelPorMenor = true
   }
   else{
      maiorDivisivelPorMenor = false
   }
   diferenca = maiorNumero - menorNumero

   return{
      maiorNumero, 
      maiorDivisivelPorMenor, 
      diferenca
   }


}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let arrayPares = []
   let primeirosPares = (arrayPares[0], arrayPares[1], arrayPares[2])
   for (numero of n){
      if (numero % 2 === 0)
         arrayPares.push(numero)
         
         return primeirosPares
   }   
      
   
   
}
 
   


   // EXERCÍCIO 09
   function classificaTriangulo(ladoA, ladoB, ladoC) {
      if (ladoA === ladoB && ladoB === ladoC & ladoC === ladoA){
         return "Equilátero"
      }
      else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
         return "Escaleno"
      }
      else {
         return "Isósceles"
      }

   }

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   array.sort((a,b)=> a-b)
   return array = [array[array.length-2], array[1]]
   
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
   }
   
      return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`

   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) { 
   let anon = {...pessoa, nome: "ANÔNIMO"
   }
   return anon

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   let autorizadas = pessoas.filter(condicao=> condicao.idade > 14 && condicao.idade <60 && condicao.altura > 1.5)
   return (autorizadas)


  }
//terminar
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   
   let naoPodemAndar = pessoas.filter (condicao=> condicao.idade <=14 || condicao.idade >=60 || condicao.altura <=1.5)
   return (naoPodemAndar)
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
   let totalCompras = 0
   for (const loop of contas) {
       totalCompras = loop.compras.reduce((numeroSomador, próximoSomado) => {
           numeroSomador += próximoSomado
           return numeroSomador
         });

   loop.saldoTotal -= totalCompras
   loop.compras = []
   return contas
   }
} 

   



// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   consultas.sort (function(a, b){
      if (a.nome > b.nome){
        return 1
      }
      if (a.nome < b.nome){
        return - 1
      }
      else {return 0
      }
    })
    return (consultas)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
      
      for (let i = 0; i < consultas.length; i++){
          
          for (let j = 0; j < consultas.length -i -1 ; j++){
              const arrayData1 = consultas[j].dataDaConsulta.split("/")
             
              const dia = Number(arrayData1[0])
              const mes = Number(arrayData1[1])
              const ano = Number(arrayData1[2])
              
  
              const arrayData2 = consultas[j+1].dataDaConsulta.split("/")
              
              const dia1 = Number(arrayData2[0])
              const mes1 = Number(arrayData2[1])
              const ano1 = Number(arrayData2[2])
  
              let dataConsulta1 = new Date(ano, mes, dia).getTime()
              let dataConsulta2 = new Date(ano1, mes1, dia1).getTime()
  
              if (dataConsulta1 > dataConsulta2){
                  let temporaria = consultas[j]
                  consultas[j] = consultas[j+1]
                  consultas[j+1] = temporaria
              }
          
          }
              
      }
      
  return consultas
  }
  
  
  

      
             
