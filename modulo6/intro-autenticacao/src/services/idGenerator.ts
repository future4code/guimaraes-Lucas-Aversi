import { v4 } from "uuid"


//Exercício 1 - ID
//1- A Creio que usando string vc tem uma variedade melhor de opções e combinações para um tipo de id especifíco.

//B

export class IdGenerator{
   generateId = ():string => v4();
}