const separaString = (nome:string, data:string) =>{
    const array = data.split("/", data.length)
    const dia = array[0]
    const mes = array[1]
    const ano = array[2]

    return `Olá ${nome}. Voce nasceu no dia ${dia}, no mês ${mes} e ano ${ano}`
}

console.log(separaString("Lucas","26/02/1991"))

