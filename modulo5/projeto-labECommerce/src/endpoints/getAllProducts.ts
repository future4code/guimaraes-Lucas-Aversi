import { Request, Response} from "express"
import {connection} from "../data/connection"

export async function getAllProducts(req: Request,res: Response): Promise<void> {
    let statusCode = 500
    try {

        const users = await connection("labecommerce_products")
        .select("*")
        if(!users.length){
            statusCode = 404
            res.status(statusCode).send("Not found any data")
        }
        res.status(200).send(users)
    } catch(e) {
        res.status(statusCode).send(e)
    }
}