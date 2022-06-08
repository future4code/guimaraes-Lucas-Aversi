type product = {
    id:string,
    name:string,
    price:number
}

export const errors ={
    ID_NOT_FOUND:{status: 404, message:"id nao encontrado"},
    MISSING_PARAMETERS:{status: 404, message:"Faltando parametro"},

}

export const products :product[]=[{
    id: "1",
    name:"um",
    price:50
},{
    id: "2",
    name:"dois",
    price:75
},{
    id: "3",
    name:"tres",
    price:100
},{
    id: "4",
    name:"quinhentos",
    price:500
}
]