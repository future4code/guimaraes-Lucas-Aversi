export const checkOneEdit = (stringA:string, stringB:string) =>{

    if (stringA.length > stringB.length) 
        return stringA.includes(stringB)
    if (stringB.length > stringA.length) 
        return stringB.includes(stringA)


    console.log()
}

console.log(checkOneEdit("abcde","abcdef"))