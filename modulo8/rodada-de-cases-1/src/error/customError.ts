//BASE ERROR

export class CustomError extends Error {
    constructor(public statusCode:number, message:string) {
      super(message);
    };;
};;


//CUSTOM ERRORS

export class MissingParams_InvalidName extends CustomError{ 
    constructor(){
        super(422,"Missing Params => Invalid Name");
    };;
};;


export class MissingParams_InvalidEmail extends CustomError{ 
    constructor(){
        super(422,"Missing Params => Invalid Email");
    };;
};;


export class MissingParams_InvalidEmailType extends CustomError{ 
    constructor(){
        super(422,"Missing Params => Invalid Email - Email Must Contain @");
    };;
};;


export class MissingParams_InvalidPassword extends CustomError{ 
    constructor(){
        super(422,"Missing Params => Invalid Password");
    };;
};;


export class InvalidRequest_WrongPassword extends CustomError{ 
    constructor(){
        super(403,"Invalid Data => Password Does Not Match");
    };;
};;


export class InvalidRequest_UserNotFound extends CustomError{ 
    constructor(){
        super(404,"Invalid Request => User Not Found");
    };;
};;


export class InvalidRequest_EmptyString extends CustomError{ 
    constructor(){
        super(404,"Invalid Request => Email field cant bem empty!");
    };;
};;


export class BadRequest_EmptyTable extends CustomError{ 
    constructor(){
        super(404,"Bad Request => This List Has No Entries So Far");
    };;
};;


export class Forbbiden_Unauthorized extends CustomError{ 
    constructor(){
        super(403,"Forbbiden => Only admin users can explore this feature");
    };;
};;


export class InvalidRequest_WrongName extends CustomError{ 
    constructor(){
        super(422,"Invalid Request => Name cant be empty string");
    };;
};;


export class InvalidRequest_ShortPassword extends CustomError{ 
    constructor(){
        super(422,"Invalid Request => Password must contain at least 6 characters");
    };;
};;


export class InvalidRequest_ShortName extends CustomError{ 
    constructor(){
        super(422,"Invalid Request => Name must contain at least 3 characters");
    };;
};;


export class InvalidRequest_InvalidTime extends CustomError{ 
    constructor(){
        super(422,"Invalid Request => There is conflict between start and end time");
    };;
};;

export class InvalidRequest_TimeNotAvaiable extends CustomError{ 
    constructor(){
        super(422,"Invalid Request => Someone has already reserved intended time");
    };;
};;

export class InvalidRequest_WrongTime extends CustomError{ 
    constructor(){
        super(422,"Invalid Request => Type of walk diverges of intended time");
    };;
};;