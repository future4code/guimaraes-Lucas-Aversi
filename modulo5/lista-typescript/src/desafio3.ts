const checaAnagrama = (palavra:string)=>{
    const totalDeLetra = palavra.length
    return  totalDeLetra
}

function factorial(num: number) : number {
    if (num == 0) return 1
    else return num * factorial(num - 1)
}

console.log("O fatorial da string inserida é: ", factorial(checaAnagrama("Lucas")))
