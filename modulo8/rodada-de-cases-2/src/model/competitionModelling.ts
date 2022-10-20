export class Competition{
  constructor(
    private id: string,
    private name: string,
    private status: string
  ) { }
  
  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getStatus() {
    return this.status
  }


  setId(newId: string) {
    this.id = newId
  }

  setName(newName: string) {
    this.name = newName
  }

  setStatus(newStatus: string) {
    this.status = newStatus
  }

}

export interface competitionInputDTO {
  name: string
}

export type TCompetition  = {
  id: string,
  name: string,
  status: string
}
