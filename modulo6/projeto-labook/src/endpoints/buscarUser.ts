import { Request, Response } from "express"
import connection from "../data/connection"
export const buscarUser = async(req: Request,res: Response): Promise<void> => {
    try{
        const user = await connection("labook_users").select("*")
        res.status(201).send(user)
        console.log(user)

    }
    catch{(error:any)=>{
        res.send(error.message || error.sqlMessage)
        }
    }
}