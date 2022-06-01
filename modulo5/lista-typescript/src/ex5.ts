type usuario ={
    name:string
    email:string
    role: string
}

let arrayDeUsuário: usuario[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

let filtraEmail = arrayDeUsuário.filter((item)=>{
    return item.email && item.role.includes("admin")
}).map(item2 =>{
    return item2.email
})

console.log (filtraEmail) 

