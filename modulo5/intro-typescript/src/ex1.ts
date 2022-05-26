const checaTriangulho = (a:number, b:number, c:number) =>{
    if (a ===b && b===c){
        return("equilatero")
    } else if (a === b && c !== b){
        return("isoceles")
    }else{
        return("escaleno")
    }
}

console.log(checaTriangulho(1,2,3))
