export class Posts {
    constructor(
      private id: string,
      private photo: string,
      private description: string,
      private type: string,
      private created_at: string,
      private author_id: string,


    ) { }
    
    getId() {
      return this.id
    }
  
    getPhoto() {
      return this.photo
    }
  
    getDescription() {
      return this.description
    }
  
    getType() {
      return this.type
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
  
    setName(newPhoto: string) {
      this.photo = newPhoto
    }
  
    setDescription(newDescription: string) {
      this.description = newDescription
    }

    setType(newType: string) {
        this.type = newType
    }    
  
    setCreatedAt(newCreatedAt: string) {
      this.created_at = newCreatedAt
    }
    

  }

  export interface postsInputDTO {
    photo: string,
    description: string,
    type: string,
    author_id: string,

  }
  
  export type posts  = {
    id: string,
    photo: string,
    description: string,
    type: string,
    created_at: string,
    author_id: string,
  }
  