type clientes ={
    cliente:string
    saldoTotal:number
    debitos:number[]
}

let arrayDeClientes: clientes[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

let emprestimo = (array: clientes[])=>{

    for(const conta of arrayDeClientes){
        let somarDebitos = conta.debitos.reduce((valorTotal:number, proximoValor:number)=>valorTotal += proximoValor,0)
        conta.saldoTotal -=somarDebitos
        conta.debitos = []
    }
    
    let clienteSaldoNegativo = array.filter((conta)=> conta.saldoTotal < 0)
    return clienteSaldoNegativo

}    

console.log(emprestimo(arrayDeClientes))

