import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  Occupation = 'SchoolStudent';
  IsError = false;
  IsFormSaved = false;
  redirectCounter = 12;
  counterInterval: any;

  constructor(private route: Router) {
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
  OnSubmitClick() {
    this.IsFormSaved = true;
    window.scrollTo(0, 0);
    this.counterInterval = setInterval(() => {
      this.redirectCounter--;
    }, 1000);
    setTimeout(
      () => { this.IsFormSaved = false;
        this.route.navigate(['/Home']);
      }, 12000);
  }
  ngOnDestroy() {
    clearInterval(this.counterInterval);
  }
}
