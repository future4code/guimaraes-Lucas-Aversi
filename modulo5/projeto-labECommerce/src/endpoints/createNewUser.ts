import { Request, Response} from "express"
import { app } from "../app";
import { connection } from "../data/connection";
import { v4 as generateId } from 'uuid';


export async function createNewUser(req: Request,res: Response): Promise<void> {

    const {name, email, password} = req.body

    try {

        if (!name) {
            res.status(400).send("Name is missing. You must put this data.")            
        }else if(!email){
            res.status(400).send("Email is missing. You must put this data.")
        }else if(!password){
            res.status(400).send("Password is missing. You must put this data.")
        }else 
        {
            await connection("labecommerce_users")
            .insert({
                id: generateId(),
                name: name,
                email: email,
                password: password
            })
            res.status(200).send("New user created.").end()
        }

    } catch(err) {
        res.status(500).send(err)
    }

}