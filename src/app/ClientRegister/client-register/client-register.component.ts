import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.scss']
})
export class ClientRegisterComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  userName = new FormControl('', [
    Validators.required,
  ]);
  mobileNumber = new FormControl('', [
    Validators.required,
  ]);
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  address = new FormControl('', [
    Validators.required,
  ]);
  gender = new FormControl('', [
    Validators.required,
  ]);
  // user = new User();
  isValidFormSubmitted = false;
  constructor() { }
  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    form.resetForm();
  }
  ngOnInit(): void {

  }
}


