export class Friendship {
    constructor(
      private idRequest: string,
      private sender: string,
      private reciever: string

    ) { }
    
    getIdRequest() {
      return this.idRequest
    }
  
    getSender() {
      return this.sender
    }
  
    getReciever() {
      return this.reciever
    }

  }

  export interface friendshipInputDTO {
    sender: any,
    reciever: string
  }
  
  export type friendship  = {
    idRequest: string,
    sender: string,
    reciever: string
  }
  