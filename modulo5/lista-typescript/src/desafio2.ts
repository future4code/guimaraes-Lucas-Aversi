

const checaData = (data:string, emissao:string)=>{
    const array = data.split("/", data.length)
    const arrayEmissao = emissao.split("/", emissao.length)
    const anoEmissao = Number(arrayEmissao[2])
    const anoNascimento = Number(array[2])
    const anoAtual = 2022
    const tempoDeRg = anoAtual-anoEmissao
    const idade = anoAtual - anoNascimento


        if (idade < 20 && tempoDeRg>= 5 || idade >=20 && idade <=59 && tempoDeRg>=10 || idade>=50 && tempoDeRg >=15){
            return `Precisa renovar! Você já tem seu RG há ${tempoDeRg} anos.`
        }else{
            return "Ainda não precisa renovar!"
        }
}

console.log(checaData("26/12/1900", "15/15/2020"))
