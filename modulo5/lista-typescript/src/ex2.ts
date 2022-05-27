const mostraTipo = (data:any) =>{
    const type = typeof data
    return (`${type}  `)

}

console.log(mostraTipo(true)) 