export class Movie {
  constructor(
      private id: string,
      private title: string,
      private description: string,
      private duration_in_minutes: number,
      private year_of_release: number
  ) { }

  getId() {
      return this.id
  }
  getTitle() {
      return this.title
  }
  getDescription() {
      return this.description
  }
  getDuration_in_minutes() {
      return this.duration_in_minutes
  }
  getYear_of_release() {
      return this.year_of_release
  }

  setId(newId: string) {
    this.id = newId
  }

  setTitle(newTitle: string) {
    this.title = newTitle
  }

  setDescription(newDescription: string) {
    this.description = newDescription
  }

  setDurationInMinutes(newDuration: number) {
    this.duration_in_minutes = newDuration
  }

  setYearOfRelease(newYearOfRelease: number) {
    this.year_of_release = newYearOfRelease
  }

}