export class RecommendationModel {
  Id: number;
  Name: string;
  ImageURL: string;
  EmailAddress: string ;
  PhoneNumber: string ;
  Occupation: string;
  Comment: string;

  constructor(Id: number, Name: string, ImageURL: string, EmailAddress: string, PhoneNumber: string, Occupation: string, Comment: string) {
    this.Id = Id;
    this.Name = Name;
    this.ImageURL = ImageURL;
    this.EmailAddress = EmailAddress;
    this.PhoneNumber = PhoneNumber;
    this.Occupation = Occupation;
    this.Comment = Comment;
  }
}
