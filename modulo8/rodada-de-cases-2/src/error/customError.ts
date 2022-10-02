//BASE ERROR

export class CustomError extends Error {
    constructor(public statusCode:number, message:string) {
      super(message);
    };;
};;


//CUSTOM ERRORS

