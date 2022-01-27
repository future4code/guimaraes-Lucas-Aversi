/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log ("Bem vindo ao jogo de Blackjack!")

      let primeiraCartaDoUsuário = comprarCarta()
      let segundaCartaDoUsuário = comprarCarta()
      let primeiraCartaDoComputador = comprarCarta()
      let segundaCartaDoComputador = comprarCarta()

      let scoreUsuário = primeiraCartaDoUsuário.valor + segundaCartaDoUsuário.valor
      let scoreComputador = primeiraCartaDoComputador.valor + segundaCartaDoComputador.valor
      console.log(`Usuário, as suas cartão são: ${primeiraCartaDoUsuário.texto}${segundaCartaDoUsuário.texto}, pontuação total: ${primeiraCartaDoUsuário.valor + segundaCartaDoUsuário.valor}`)
      console.log(`As cartas do computador são: ${primeiraCartaDoComputador.texto}${segundaCartaDoComputador.texto}, pontuação total: ${primeiraCartaDoComputador.valor + segundaCartaDoComputador.valor}`)
      
      if (scoreUsuário === scoreComputador){
         console.log ("Empatou!!!")
      }
      
      else if (scoreUsuário > scoreComputador){
         console.log ("Você Venceu!!!")
      }

      else if (scoreUsuário < scoreComputador)
         console.log ("O computador venceu!!!")
    
      
      else {
         console.log ("Game Over")

    }
   

