export interface IMovie {
  imdbID: string,
  title: string,
  year: string,
  runtime: string,
  genre: string,
  director: string
}

export enum UserActions {
  new,
  edit
}