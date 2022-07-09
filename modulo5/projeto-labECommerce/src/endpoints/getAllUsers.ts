import { Request, Response} from "express"
import {connection} from "../data/connection"

export async function getAllUsers(req: Request,res: Response): Promise<void> {
    try {
        const users = await connection("labecommerce_users")
        .select("*")
        res.status(200).send(users)
    } catch (err) {
        res.status(500).send(err)
    }
}