export class Recipes {
    constructor(
      private id: string,
      private title: string,
      private email: string,
      private instructions: string,
      private created_at: string,
      private author_id: string


    ) { }
    
    getId() {
      return this.id
    }
  
    getTitle() {
      return this.title
    }
  
    getEmail() {
      return this.email
    }
  
    getinstructions() {
      return this.instructions
    }

    getCreatedAt() {
        return this.created_at
    }

    getAuthor() {
        return this.author_id
    }
  
    setId(newId: string) {
      this.id = newId
    }
  
    setTitle(newtitle: string) {
      this.title = newtitle
    }
  
    setEmail(newEmail: string) {
      this.email = newEmail
    }
  
    setInstructions(newinstructions: string) {
      this.instructions = newinstructions
    }
  }
  
  export interface recipeInputDTO {
    title: string,
    description: string,
    instructions: string,
    author_id:string 
  }
  
  export type recipe  = {
    id: string,
    title: string,
    description: string,
    instructions: string,
    created_at?:string,
    author_id:string
  }