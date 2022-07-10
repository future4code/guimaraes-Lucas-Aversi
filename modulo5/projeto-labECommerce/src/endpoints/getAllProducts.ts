import { Request, Response} from "express"
import {connection} from "../data/connection"

export async function getAllProducts(req: Request,res: Response): Promise<void> {
    let statusCode = 500
    try {

        let sort = req.query.sort as string
        const order = req.query.order as string
        const search = req.query.search as string


        if (!sort) { sort='name' }
        if (order?.toUpperCase() !== 'ASC' || order?.toUpperCase() !== 'DESC') { 
          order  }
        if (search){
            const searchedProduct = await connection("labecommerce_products")
            .select("*")
            .where("name", "like", `%${search}%`)
            res.status(200).send(searchedProduct)
        }
    
        const products = await connection('labecommerce_products')
        .orderBy(sort,order)
        .select()
    
        if(!products.length) {
           statusCode = 404
           throw new Error("Nenhum produto foi encontrado com os parâmetros passados.")
        }
    
        res.status(200).send(products)
    } catch(e) {
        res.status(statusCode).send(e)
    }
}