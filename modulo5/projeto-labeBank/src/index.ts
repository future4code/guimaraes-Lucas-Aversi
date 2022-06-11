console.log("Hello, world!")

import { ok } from 'assert';
import express from 'express'
import { Request, Response } from 'express'
import { AddressInfo } from "net";
import { restart } from 'nodemon';

/* enum ACCTYPE {
  corrente= "corrente",
  poupança="poupança"
} */



type transaction={
  tipo:string,
  valor:number,
  data:string 
}

type conta ={
  userId:number,
  name:string,
  idade:number
  cpf:string|number,
  accType: string,
  saldo:number,
  extrato:transaction[]
  
}





const contas :conta[]=[
  {
    userId:1,
    name:"Lucas",
    idade: 31,
    cpf:"222.222.222.22",
    accType: "corrente",
    saldo: 1000,
    extrato:[{
      tipo: "debito",
      valor: 45,
      data: "25/02/1991"
    },{
      tipo:"debito",
      valor:15,
      data: "25/02/1991"

    },{
      tipo:"credito",
      valor:200,
      data: "25/02/1991"

    }], 
  },
/* 
  {
    userId:1,
    name:"Lucas",
    idade: 31,
    cpf:"222.222.222.21",
    accType: "poupança",
    extrato:[{
      tipo: "debito",
      valor: 45
    }],
 
  },

  {
    userId:2,
    name:"Joao",
    idade: 31,
    cpf:"111.111.111-35",
    accType: "poupança",
    extrato:[{
      tipo: "debito",
      valor: 45
    }],
  },

  {                               
    userId:3,
    name:"Carlos",
    idade: 40,
    cpf:"333.333.333-35",
    accType: "corrente",
    extrato:[{
      tipo: "debito",
      valor: 45
    }],
  },  */
]



const app = express();

app.use(express.json());



app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
})

app.get("/contas", (req: Request, res: Response) => {
  res.status(201).send(contas)
})  

app.post("/contas", (req: Request, res: Response) => {
  const data = (req.body)

  if(data.idade < 18){
    res.status(400).send("Idade precisa ser maior que 18")
  }

  contas.forEach((c)=>{
    if (c.cpf === data.cpf){
      res.status(400).send("CPF já existe")
    }
  })

  res.status(201).send([... contas, data])
})

app.get("/saldo/:cpf",(req: Request, res: Response)=>{
    
  const cpf = (req.params.cpf)

    contas.forEach((c)=>{
      if (c.cpf === cpf){
        c.extrato.forEach((d)=>{
          if (d.tipo !== "credito"){
            c.saldo -= d.valor
          }
          if (d.tipo!=="debito"){
            c.saldo += d.valor
          }
          d.valor = 0
        })  
      }
    })
    res.status(201).send(contas)

})
console.log("ok")






const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });; 