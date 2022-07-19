import { Request, Response} from "express"
import { app } from "../app";
import { connection } from "../data/connection";
import { v4 as generateId } from 'uuid';

const getProduct = async(productId: string): Promise <any> => {

    const result = await connection("labecommerce_products")
    .select("name", "price")
    .where("id", "like", `${productId}`)

    return result[0]
}

export async function createNewPurchase(req: Request,res: Response): Promise<void> {

    const {user_id, products_id, quantity} = req.body

    try {

        if (!user_id) {
            res.status(400).send("Your purchase needs a userId. You must put this data.")            
        }else if(!products_id){
            res.status(400).send("Your purchase needs a productId. You must put this data.")
        }else if(!quantity){
            res.status(400).send("Your purchase needs a quantity. You must put this data.")
        }else 
        {
            const product = await getProduct(products_id)
            await connection("labecommerce_purchases")
            .insert({
            
                id: generateId(),
                user_id: user_id,
                products_id: products_id,
                quantity: quantity,
                total_price: product.price*quantity
            })
            res.status(200).send("A new purchase has been registered.").end()
        }

    } catch(err) {
        res.status(500).send(err)
    }

}