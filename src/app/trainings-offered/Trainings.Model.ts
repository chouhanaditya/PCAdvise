export class TrainingsModel {
  Id: number;
  Name: string;
  ImageURL: string;
  Description: string;

  constructor(Id: number, Name: string, ImageURL: string, Description: string) {
    this.Id = Id;
    this.Name = Name;
    this.ImageURL = ImageURL;
    this.Description = Description;
  }
}
