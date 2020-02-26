import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})

export class UserRegistrationFormComponent implements OnInit {
  addressFormGroup: FormGroup;
  transactionDetailFormGroup: FormGroup;
  secretWordsFormGroup: FormGroup;
  withDeposit = true;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addressFormGroup = this.formBuilder.group({
      tAddress: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.transactionDetailFormGroup = this.formBuilder.group({
      transactionId: ['', Validators.required],
    });
    this.secretWordsFormGroup = this.formBuilder.group({
      secretWord1: ['', Validators.required],
      secretWord2: ['', Validators.required],
      secretWord3: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.addressFormGroup.valid);
    console.log(this.transactionDetailFormGroup.valid);
    console.log(this.secretWordsFormGroup.valid);
  }

}
