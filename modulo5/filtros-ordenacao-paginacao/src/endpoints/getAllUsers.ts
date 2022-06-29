import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    let statusCode = undefined;
    try {
       let name = req.query.name
 
       if (!name) { name = '%' }
 
       const users = await connection('aula49_users')
          .where('name', 'like', `%${name}%`)
 
       if (!users.length) {
          statusCode = 404
          throw new Error("Nenhum usuário encontrado com esse nome.");
       }
 
       res.status(200).send(users)
 
    } catch (error: any) {
       res.status(statusCode || 400).send(error.message);
    }
 }
 
 export const getUserByType = async (req: Request, res: Response): Promise<void> => {
    let statusCode = undefined;
 
 try {
    let type = req.params.type
 
    if(!type) { type ='%' }

    const users = await connection('aula48_exercicio')
    .where('type', '=', `${type}`)
 
    if(!users.length) {
    statusCode = 404
    throw new Error("Nenhum usuário encontrado pelo tipo selecionado") 
    }
 
    res.status(200).send(users)
 
 } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
    }
 }
 
 