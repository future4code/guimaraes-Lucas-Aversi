export class Follow {
    constructor(
      private id: string,
      private user_id: string,
      private following_id: string,
    ) { }
    
    getId() {
      return this.id
    }
  
    getUserId() {
      return this.user_id
    }
  
    getFollowingId() {
      return this.following_id
    }
  
  
    setId(newId: string) {
      this.id = newId
    }
  
    setUserId(newUserId: string) {
      this.user_id = newUserId
    }
  
    setFollowingId(newFollowingId: string) {
      this.following_id = newFollowingId
    }
  
  }
  
  export interface FollowInputDTO {
    user_id: string,
    following_id: string
  }
  
  export type follow  = {
    id: string,
    user_id: string,
    following_id: string
  }