import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'

//EXERCÍCIO 1
const app = express()

app.listen(3003, () => {
    console.log('we are on Baby');
 });

app.use(express.json())
app.use(cors())

app.get('/', (request: Request, response: Response) => {
    response.send('Bem vindo ao servidor'); // retorna a resposta pro usuario
 });
 
 app.get('/documentation', (request: Request, response: Response) => {
    response.send('Bem vindo a documentação dessa API'); // retorna a resposta pro usuario
 });

 app.get('/about', (request: Request, response: Response) => {
    response.send('I am Lucas Aversi, and i m a Web Developer'); // retorna a resposta pro usuario
 });

 //EXERCÍCIO 2


 type Data = {
     id: string | number,
     name: string,
     phone: string| number,
     email: string,
     website: string
 }

 //EXERCÍCIO 3

 const users:Data[] = [
	{ id: 1, name: "João", phone: 99998888, email: "joao@gmail.com", website:"joao.com.br" },
    { id: 2, name: "Lucas", phone: 77776666, email: "lucas@gmail.com", website:"lucas.com.br" },
	{ id: 3, name: "Renata", phone: 55554444, email: "renata@gmail.com", website:"renata.com.br" },
	{ id: 4, name: "Dalila", phone: 33332222, email: "dalila@gmail.com", website:"dalila.com.br" },
    { id: 5, name: "Dona B", phone: 22221111, email: "DonaB@gmail.com", website:"donaB.com.br" },
]

console.log(users[1].name)

//EXERCICIO 4

app.get("/users", (req: Request, res: Response) => {
    if(!users.length){
        res.status(401).send("Vazio")
    }
    res.status(201).send(users)
    console.log("a",users)
}) 

//EXERCICIO 5 


type Posts = {
    id: number,
    title: string,
    body: string| number,
    userId: number
}

//EXERCICIO 6

const postsData:Posts[] = [
	{ id: 1, title: "bla bla bla", body: "blau blau blau...", userId: 1,  },
    { id: 2, title: "ble ble ble", body: "bleu bleu bleu...", userId:1, },
	{ id: 3, title: "bli bli bli", body: "blew blew blew...", userId: 1, },
	{ id: 4, title: "To com fome", body: "Muita fome", userId: 2, },
    { id: 5, title: "To com sono", body: "Muito sono", userId: 2, },
]
//EU PREFERI CRIAR FORA.

// EXERCICIO 7

app.get("/posts", (req: Request, res: Response) => {
    if(!postsData.length){
        res.status(401).send("Vazio")
    }
    res.status(201).send(postsData)
    console.log("b",postsData)
})  

// EXERCICIO 8

app.get("/users/posts", (req: Request, res: Response) => {

    if(req.query.userId){
        console.log(req.query)

        const filteredId = postsData.filter((prop)=>{
            return prop.userId === Number(req.query.userId)

        })
        res.status(201).send(filteredId)

    }else{
        res.status(400).end()
    }

})  


