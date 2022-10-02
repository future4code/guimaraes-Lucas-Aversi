import { CompetitionBusiness } from "../business/competitionBusiness";
import { Request, Response } from "express";

export class CompetitionController {
    private competitionBusiness: CompetitionBusiness
  constructor(){
    this.competitionBusiness = new CompetitionBusiness();
  };;

  public createNewCompetition = async(req:Request,res:Response):Promise<void>=>{

    try {
      let {name} = req.body

      const competition = {name}
      const result = await this.competitionBusiness.createNewCompetition(competition)
      console.log(competition)
      res.status(200).send("sucesso")
    } catch (error:any) {
      res.status(400).send(error.message)
    }

  }

  public getAll = async (req:Request,res:Response)=>{
    try {
        const result = await this.competitionBusiness.getAll()
        res.status(200).send(result)

    } catch (error:any) {
      res.status(400).send(error.message)
    }

  }
};;;
