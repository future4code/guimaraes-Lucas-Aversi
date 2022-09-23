export class User {
    constructor(
      private id: string,
      private date: string,
      private status: string,
      private latitude: string,
      private longitude:string,
      private walk_date:string,
      private start_walk:string,
      private finish_walk:string,
      private quantity_dogs:string,
      private client_id:string

    ) { }
    
    getId() {return this.id}
    SetId(newId:string){this.id = newId }

    

}
export interface IwalkInputDTO {
    latitude: string,
    longitude: string,
    walk_type:string,
    walk_date:string,
    start_walk:string,
    finish_walk:string,
    quantity_dogs:number,  
    client_id:string
}
  
  export type Iwalk= {
    id: string,
    created_at: string,
    status: string,
    latitude: string,
    longitude:string,
    walk_type:string,
    walk_date:string,
    start_walk:string,
    finish_walk:string,
    quantity_dogs:number,
    final_price:string,
    client_id:string
  }