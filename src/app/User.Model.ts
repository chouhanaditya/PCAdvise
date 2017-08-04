export class User {
  Id: number;
  Name: string;
  EmailAddress: string ;
  AddressLine1: string ;
  AddressLine2: string ;
  City: string ;
  State: string ;
  MobileNumber: Number ;
  AltMobileNumber: Number;
  Occupation: string ;
  CollegeName: string ;
  SchoolName: string ;
  CompanyName: string;
  Comment: string;
  constructor(Id: number, Name: string, EmailAddress: string, AddressLine1: string, AddressLine2: string,
              City: string, State: string, MobileNumber: Number, AltMobileNumber: Number,
              Occupation: string, CollegeName: string , SchoolName: string , CompanyName: string , Comment: string ) {
    this.Id = Id;
    this.Name = Name;
    this.EmailAddress = EmailAddress;
    this.AddressLine1 = AddressLine1;
    this.AddressLine2 = AddressLine2;
    this.EmailAddress = EmailAddress;
    this.City = City;
    this.State = State;
    this.MobileNumber = MobileNumber;
    this.AltMobileNumber = AltMobileNumber;
    this.Occupation = Occupation;
    this.CollegeName = CollegeName;
    this.SchoolName = SchoolName;
    this.CompanyName = CompanyName;
    this.Comment = Comment;
  }
}
