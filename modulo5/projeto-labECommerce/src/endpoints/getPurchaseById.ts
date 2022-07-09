import { Request, Response} from "express"
import {connection} from "../data/connection"

export async function purchasesByUser(req: Request,res: Response): Promise<void> {

    try {
        const user_id = req.params.user_id
        if (!user_id){
            res.status(400).send("Your request needs an user_id param. You must put this data")
        }

        const purchases = await connection("labecommerce_purchases")
        .select("products_id" , "quantity", "total_price")
        .where("user_id", "like", `${user_id}`)
        if (!purchases.length){
            res.status(404).send("No purchases registered yet")           
        }

        res.status(200).send(purchases)

    } catch (err) {
        res.status(500).send(err)
    }

}