import connection from "./connection";
import app from "./app";
import { Request, Response } from 'express';
import { v4 as generateId } from 'uuid';


   app.get("/pong", (req, res) => {          
    res.send("PING! 🏓")
})

//1 - CREATE USER

app.post("/user", async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body
        if( !name || !nickname || !email ) { throw new Error("Falta enviar algum parâmetro, verifique o body!");
         }
        await connection.raw(`
        INSERT INTO TodoListUser (id, name, nickname, email)
        VALUES(
            "${generateId()}",
            "${name}",
            "${nickname}",
            "${email}"
        )
        `)
        res.status(201).send(`Usuário (a) ${nickname} adicionado (a) com sucesso!`);
    } catch (error: any) {
        res.status(500).send(error.message);
    }

})

//2 - GET USER BY ID

app.get("/user/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
      const idFromUser = await connection.raw(`
      SELECT * FROM TodoListUser
      WHERE id = '${id}'
   `);
      res.status(200).send(idFromUser[0][0]);
  } catch (e: any) {
      res.status(500).send(e.message);
  }
});

//3 - UPDATE A USER

app.put("/user/edit/:id", async (req: Request, res: Response) => {
  const id = req.params.id
  const { name, nickname, email } = req.body
  try {
    if (!name) { throw new Error("o parâmetro NAME não pode ser vazio.")}
    if (!nickname) { throw new Error("o parâmetro NICKNAME não pode ser vazio.")}
    if (!email) { throw new Error("o parâmetro EMAIL não pode ser vazio.")}  
    if (!id) { throw new Error("Envie o ID desejado")}
    
    await connection("TodoListUser")
      .update({
        name: name,
        nickname: nickname,
        email: email
        })
        .where({ id })
        res.status(200).send(`${nickname}, seus dados foram editados com sucesso!`)
  } catch (e: any) {
      res.status(500).send(e.message);
  }
})

//CREATE TASK TO DO

app.post("/task", async (req: Request, res: Response) => {
  try {
    let {status, title, description, limit_date, creator_user_id} = req.body
      if( !title || !description || !limit_date) { throw new Error("Falta enviar algum parâmetro, verifique o body!");
       }


      
      await connection.raw(`
      INSERT INTO TodoListTask (id, status, title, description, limit_date, creator_user_id )
      VALUES(
          "${generateId()}",
          "${status}",
          "${title}",
          "${description}",
          "${limit_date.split("/").reverse().join("/")}",
          "${creator_user_id}"
      )
      `)
      res.status(201).send(`A task ${title}foi criada com sucesso!`);
  } catch (error: any) {
      res.status(500).send(error.message);
  }

})



//ver atores teste
app.get("/actors", async (req, res):Promise<void> => {
  try{
    const getActors = await connection.raw(`SELECT * FROM Actor`)
    res.status(200).send(getActors)
  }catch(e:any){
    console.log(e.message)
    
    res.status(500).send(e.message)
  }  
})