import connection from "./data/connection";
import app from "./app";
import { Request, Response } from 'express';
import { CustomError } from "./error/customError";


app.get("/pokemon", async (req:Request,res:Response):Promise<any> =>{
    try {

        let name = req.query.name as string
        let generation = req.query.generation as string
        let type = req.query.type as string

        let sort = req.query.sort as string
        let order = req.query.order as string
        let size = Number(req.query.size) 
        let page = Number(req.query.page)
        let offset = size*(page-1)

        if(!name){name = "%"}
        if(!generation){generation = "%"}
        if(!type){type = "%"}


        if(sort !== "id" && sort !== "name" && sort !== "generation" && sort !== "type"){sort="id"}
        if(order?.toUpperCase()!=="ASC" && order?.toUpperCase() !== "DESC"){order = "ASC"}
        if(!size){size = 1000}
        if(size<1){size = 30}
        if(isNaN(page)||page<1){page = 1}
        if(!offset){offset = 0}

        const result = await connection("pokemonGo_pokemons")
        .select()
        .where("name", "like", `%${name}%`)
        .andWhere("generation","like",`${generation}`)
        .andWhere((result)=>{
            result.where("type_1","like",`${type}`).orWhere("type_2","like",`${type}`)
        })
        .orderBy(sort,order)
        .limit(size)
        .offset(offset)

        if(result.length<1){throw new CustomError(404,"Not Found")}


        res.status(200).send(result);
    } catch (error:any) {
        if(error instanceof CustomError){
            res.status(error.statusCode).send(error.message)
        }res.send(error.message)        
    }
})

app.get("/pokemon/id/:id", async (req:Request,res:Response):Promise<any> =>{
    try {
        let id = Number(req.params.id)
        if(isNaN(id)){throw new CustomError(422,"Id must be a valid number")} 
       
        const result = await connection("pokemonGo_pokemons")
        .select()
        .where({id})

        if(result.length<1){throw new CustomError(404,"Not Found")}

        res.status(200).send(result);
    } catch (error:any) {
        res.send(error.message)        
    }
})