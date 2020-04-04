import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import {MatStepper} from '@angular/material';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})

export class UserRegistrationFormComponent implements OnInit {
    @ViewChild('stepper', {static: false}) stepper: MatStepper;
    addressFormGroup: FormGroup;
    transactionDetailFormGroup: FormGroup;
    secretWordsFormGroup: FormGroup;
    withDeposit = true;


    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
      this.addressFormGroup = this.formBuilder.group({
          tAddress: ['', Validators.required],
          email: ['', Validators.required],
          doneDeposit: [true],
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

    nextStep(index: number) {
      this.stepper.selectedIndex = index;
    }

    goToNextStep() {
      if(this.addressFormGroup.get('doneDeposit').value) {
          this.nextStep(1);
      } else {
          this.nextStep(2);
      }
    }

    // toggleDepositStatus() {
    //   this.withDeposit = !this.withDeposit;
    // }
}
