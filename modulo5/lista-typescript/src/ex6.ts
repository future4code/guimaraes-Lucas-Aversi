

function retornaContasComSaldoAtualizado(contas) {
    let totalCompras = 0
    for (const loop of contas) {
        totalCompras = loop.compras.reduce((numeroSomador:number, próximoSomado:number) => {
            numeroSomador += próximoSomado
            return numeroSomador
          });
 
    loop.saldoTotal -= totalCompras
    loop.compras = []
    return contas
    }
 } 
 