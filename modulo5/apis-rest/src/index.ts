console.log("Hello, world!")
import { users } from './data';
import express from 'express'
import { Request, Response } from 'express'

import { AddressInfo } from "net";

const app = express();

app.use(express.json());



app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})

//EXERCICIO 1
app.get("/users", (req, res) => {   
  try{
    res.send(users)
  }
  catch{

  }       
})

//

app.get("/users/:type", (req, res) => {   
  const typeParam = req.params.type

  try{
    const filteredType = users.filter((u)=>
      u.type.toLocaleLowerCase() === typeParam.toLocaleLowerCase()
    )
    res.status(201).send(filteredType)
  }
  catch(error:any){
    res.send(error.message)
  }       
})

//EXERCICIO 3

app.get("/users/search", (req, res) => {   
  try{
    const name = req.query.name as string 
    const filteredName = users.filter((u)=>u.name===name)
    res.send(filteredName)
    console.log(filteredName)
  }
  catch(e:any){
    res.send(e.message)
  }       
})
//EXERCICIO 4

app.post("/users", (req, res) => {   
  try{
    const {id, name, email, type, age} = req.body
    const newUsers = [...users, {id,name,email,type, age}]
    res.send(newUsers)
  }
  catch(e:any){
    res.send(e.message)
  }       
})







app.get("/users", (req, res) => {          
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });; 