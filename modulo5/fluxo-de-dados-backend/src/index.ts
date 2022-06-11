console.log("Hello, world!")
import { products } from './data';
import { errors } from './data';
import express from 'express'
import { Request, Response } from 'express'

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})


//EXERCICIO 3
app.post("/products",(req, res)=>{
  try{
    const {id, name, price} = (req.body)

    if(!id || !name ||!price){
      throw new Error("Algum parametro está faltando. Checar o body");      
    }

    if(typeof name !== "string" ){
      throw new Error("O nome precisa ser uma string")}

    if(typeof id !== "string"){
      throw new Error("A id precisa ser uma string")}
    if(typeof price !=="number"||price <=0){
      throw new Error("Passe um preço válido")}

    res.status(201).send([... products, {id,name,price}])

  }
  catch(error:any){
    res.send(error.message)
  }}
)

  //EXERCICO 4

  app.get("/products",(req, res)=>{
    try{
      res.status(201).send(products)
    }
    catch(error:any){
      res.send(error.message)
    }}
  )

  //EXERCICIO 5

  app.put("/products/:id", (req, res)=>{
    try{
      const id = req.params.id
      const price = req.body.price

      if(!price){
        throw new Error(errors.MISSING_PARAMETERS.message)
      }
      products.forEach((p)=>{
        if(p.id === id){
          p.price = price
        }       
      })
      res.status(201).send(products)
    }
    catch(error:any){
      res.send(error.message)
    }}
  )

  //EXERCICIO 6

  app.delete("/products/:id", (req, res)=>{
    try{
      const id = req.params.id
      products.forEach((p, i)=>{
        if(p.id === id){
          products.splice(i,1)
        }
      })
      res.status(200).send(products)
    }
    catch(error:any){
      res.send(error.message)
    }}
  )

  //EXERCICIO 7 - refatorado

  
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }}
);
    

