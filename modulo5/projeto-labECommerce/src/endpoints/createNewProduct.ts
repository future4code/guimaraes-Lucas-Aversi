import { Request, Response} from "express"
import { app } from "../app";
import { connection } from "../data/connection";
import { v4 as generateId } from 'uuid';


export async function createNewProduct(req: Request,res: Response): Promise<void> {

    const {name, price, img_url} = req.body

    try {

        if (!name) {
            res.status(400).send("Your product needs a name. You must put this data.")            
        }else if(!price){
            res.status(400).send("Your product needs a price. You must put this data.")
        }else if(!img_url){
            res.status(400).send("Your product needs an image url. You must put this data.")
        }else 
        {
            await connection("labecommerce_products")
            .insert({
                id: generateId(),
                name: name,
                price: price,
                img_url: img_url
            })
            res.status(200).send("New product created and avaiable for shopping.").end()
        }

    } catch(err) {
        res.status(500).send(err)
    }

}