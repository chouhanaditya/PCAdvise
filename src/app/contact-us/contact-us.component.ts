import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  Occupation: string;

  constructor() {
  }

  ngOnInit() {
    this.contactForm = new FormGroup(
      {
        Id: new FormControl(''),
        Name: new FormControl('', Validators.required),
        EmailAddress: new FormControl('', [Validators.required, Validators.email]),
        MobileNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[1-9]+[0-9]*$/)]),
        AltMobileNumber: new FormControl('', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[1-9]+[0-9]*$/)]),
        AddressLine1: new FormControl(''),
        AddressLine2: new FormControl(''),
        City: new FormControl('', Validators.required),
        State: new FormControl(''),
        Occupation: new FormControl(''),
        CollegeName: new FormControl(''),
        SchoolName: new FormControl(''),
        CompanyName: new FormControl(''),
        Comment: new FormControl('', Validators.required)
      });
  }
}
