export class CustomError extends Error {
    constructor(message:string) {
      super(message)
    } 
}

export class MissingParams_InvalidName extends CustomError{ 
    constructor(){
        super("422 - Missing Params - Invalid Name")
    }
}


export class MissingParams_InvalidEmail extends CustomError{ 
    constructor(){
        super("422 - Missing Params - Invalid Email")
    }
}

 class MissingParams_InvalidEmailType extends CustomError{ 
    constructor(){
        super("422 - Missing Params - Invalid Email - Email Must Contain @")
    }
}
export const missingParams_InvalidEmailType = new MissingParams_InvalidEmailType()

export class MissingParams_InvalidPassword extends CustomError{ 
    constructor(){
        super("422 - Missing Params - Invalid Password")
    }
}

export class InvalidRequest_WrongPassword extends CustomError{ 
    constructor(){
        super("403 - Invalid Data - Password Does Not Match")
    }
}

export class InvalidRequest_UserNotFound extends CustomError{ 
    constructor(){
        super("404 - Invalid Request - User Not Found")
    }
}

export class BadRequest_EmptyTable extends CustomError{ 
    constructor(){
        super("400 - Bad Request - This List Has No Entries So Far")
    }
}