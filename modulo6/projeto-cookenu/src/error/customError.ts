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

export class MissingParams_InvalidTitle extends CustomError{ 
    constructor(){
        super("422 - Missing Params - Invalid Title")
    }
}

export class MissingParams_InvalidDescription extends CustomError{ 
    constructor(){
        super("422 - Missing Params - Invalid Description")
    }
}

export class MissingParams_InvalidInstructions extends CustomError{ 
    constructor(){
        super("422 - Missing Params - Invalid Instructions")
    }
}

export class MissingParams_InvalidAuthor extends CustomError{ 
    constructor(){
        super("404 - Not Found- Invalid Author")
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

export class InvalidRequest_RecipeNotFound extends CustomError{ 
    constructor(){
        super("404 - Invalid Request - Recipe Not Found")
    }
}

export class BadRequest_EmptyTable extends CustomError{ 
    constructor(){
        super("400 - Bad Request - This List Has No Entries So Far")
    }
}

export class Forbbiden_Unauthorized extends CustomError{ 
    constructor(){
        super("403 - Forbbiden - Only admin users can explore this feature")
    }
}