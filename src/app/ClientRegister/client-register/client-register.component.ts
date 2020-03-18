import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, NgForm } from '@angular/forms';
@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.scss']
})
export class ClientRegisterComponent {
  regiForm: FormGroup;
  userName: string = "";
  mobileNumber: string = "";
  address: string = "";
  gender: string = "";
  email: string = "";
  dob: Date;
  constructor(private fb: FormBuilder) {
    this.regiForm = fb.group({
      'userName': [null, Validators.required],
      'mobileNumber': [null, Validators.required],
      'address': [null, Validators.required],
      'gender': [null, Validators.required],
      'email': [null, Validators.required],
      'dob': [null, Validators.required],
    });

  }
  onFormSubmit(form: NgForm) {
    console.log(form);
  }
}



