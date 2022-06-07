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



type transaction=[
    debit:[],
    credit:[]  
  ]



type conta ={
  userId:number,
  name:string,
  idade:number
  cpf:string|number,
  accType: string,
  saldo:number
  extrato:number[][]   
}





const contas :conta[]=[
  {
    userId:1,
    name:"Lucas",
    idade: 31,
    cpf:"222.222.222.22",
    accType: "corrente",
    saldo: 1000,
    extrato:[[2,2,5],[5,5,5]]
  }
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

//aaaaaaaaaaaa
 app.get("/saldo/:cpf",(req: Request, res: Response)=>{
    
  const cpf = (req.params.cpf)
  let saldoFinal:number|undefined = 0

    contas.forEach((c)=>{
      if (c.cpf === cpf){
            let debito = c.extrato[0]
            let credito = c.extrato[1]
            let saldo = c.saldo

            let somaDebito = debito.reduce((valorTotal:number, proximoValor:number)=>valorTotal += proximoValor,0)
            let somaCredito = credito.reduce((valorTotal:number, proximoValor:number)=>valorTotal += proximoValor,0)

            c.saldo = saldo + somaCredito - somaDebito
            credito = []
            debito = []
            console.log("Você gastou esse mês",somaDebito,"Depositaram na sua conta esse mês",somaCredito,"O valor do saldo final é:",saldo)  
                            
        }
    })
    res.status(201).send(contas)

})
console.log("ok") 



app.put("/contas/:name/:cpf", (req: Request, res: Response) => {
    const name = (req.params.name)
    const cpf = (req.params.cpf)

    const valor = req.body.valor

    contas.forEach((a)=>{
        if (a.name === name && a.cpf === cpf ){
            a.saldo = a.saldo-valor
            console.log(a.saldo-valor)

        }
    })
    res.status(200).send(contas)
})  




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });; 