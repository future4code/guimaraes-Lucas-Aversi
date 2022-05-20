 const name = process.argv[2]
 const idade = Number(process.argv[3])
 if (process.argv[2] || process.argv[3] == undefined){
     console.log("Você esqueceu de colocar o nome ou a idade")
 }

 const novaIdade = Number(idade + 7)
 console.log('\x1b[36m%s\x1b[0m',`Olá, ${name}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)


