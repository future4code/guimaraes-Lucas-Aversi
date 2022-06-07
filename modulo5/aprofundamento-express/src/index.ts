//EXERCÍCIO 1

import express from "express";
import { Request, Response } from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});; 

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

//EXERCICIO 2

type ListaDeAfazeres={
    userId: number 
    id: number
    title: string
    completed: boolean
}

//EXERCICIO 3

const afazeres :ListaDeAfazeres[] =[
    {
        userId:1,
        id: 1,
        title: "Comer",
        completed: false
    },

    {
        userId:1,
        id: 2,
        title: "Dormir",
        completed: false
    },

    {
        userId:1,
        id: 3,
        title: "Trabalhar",
        completed: true
    },

    {
        userId:2,
        id: 4,
        title: "jogar",
        completed: false
    },  

    {
        userId:2,
        id: 5,
        title: "estudar",
        completed: true
    }

]

//EXERCÍCIO 4

app.get("/afazeres", (req: Request, res: Response) => {
    if(!afazeres.length){
        res.status(401).send("Vazio")
    }
    res.status(201).send(afazeres)
})  

app.get("/afazeres/concluidas", (req: Request, res: Response) => {
        const filteredTask = afazeres.filter((prop)=>{
            return prop.completed === true
        })
        console.log("aquii",filteredTask)
        res.status(201).send(filteredTask)

    })

app.get("/afazeres/naoconcluidas", (req: Request, res: Response) => {
    const filteredTask = afazeres.filter((prop)=>{
        return prop.completed === false
    })
    console.log("aquii",filteredTask)
    res.status(201).send(filteredTask)

})    

//EXERCÍCIO 5

app.post("/afazeres", (req: Request, res: Response) => {
    const data = (req.body)
    res.status(201).send([... afazeres, data])
})  

//EXERCÍCIO 6
app.put("/afazeres/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const completed = req.body.completed

    afazeres.forEach((a)=>{
        if (a.id === id){
            a.completed = completed
        }
    })
    res.status(200).send(afazeres)
})

//EXERCICIO 7

app.delete("/afazeres/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    afazeres.forEach((a, i)=>{
        if (a.id === id){
            afazeres.splice(i, 1)
        }
    })
    res.status(200).send(afazeres)
})

//EXERCICIO 8 ->incompleto

app.get("/afazeres/filtrado/", (req: Request, res: Response) => {

    if(req.query.userId){
        console.log(req.query)

        const filteredId = afazeres.filter((prop)=>{
            return prop.userId === Number(req.query.userId)

        })
        res.status(201).send(filteredId)

    }else{
        res.status(400).end()
    }
})


