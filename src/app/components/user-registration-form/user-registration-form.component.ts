import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl
} from '@angular/forms';
import { MatStepper } from '@angular/material';
import { ResponseData } from '../../interface';
import { PoolService } from '../../service/pool.service';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent implements OnInit {
  @ViewChild('stepper', { static: false }) stepper: MatStepper;
  // private poolService: PoolService;
  responseData: ResponseData;
  addressFormGroup: FormGroup;
  transactionDetailFormGroup: FormGroup;
  secretWordsFormGroup: FormGroup;
  withDeposit = true;
  validRegistration = false;
  errorMessage = {
    email: '',
    publicAddress: '',
    transactionId: '',
    secretWords: []
  };

  constructor(
    private formBuilder: FormBuilder,
    private poolService: PoolService
  ) {}

  ngOnInit() {
    this.addressFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      publicAddress: ['', this.alphaNumericValidator(34, 40)],
      doneDeposit: [true]
    });
    this.transactionDetailFormGroup = this.formBuilder.group({
      transactionId: ['', this.alphaNumericValidator(64, 70)]
    });
    this.secretWordsFormGroup = this.formBuilder.group({
      secretWord1: ['word1', this.alphaNumericValidator(5, 15)],
      secretWord2: ['word2', this.alphaNumericValidator(5, 15)],
      secretWord3: ['word3', this.alphaNumericValidator(5, 15)]
    });
  }

  onSubmit() {
    console.log(this.addressFormGroup.valid);
    console.log(this.transactionDetailFormGroup.valid);
    console.log(this.secretWordsFormGroup.valid);
    this.validRegistration = (
      this.addressFormGroup.valid &&
      this.transactionDetailFormGroup.valid &&
      this.secretWordsFormGroup.valid
    );

    if (this.validRegistration) {
      const user = {
        email: this.getEmail().value,
        publicAddress: this.getPublicAddress().value,
        transactionId: this.getTransactionId().value,
        secretWords: [
          this.getSecretWords(1).value,
          this.getSecretWords(2).value,
          this.getSecretWords(3).value
        ]
      };

      this.poolService.registerUser(user)
      .subscribe((result) => {
        this.responseData = result;
        console.log(' Data :: ');
        console.log(result);
      });

      this.addressFormGroup.reset();
      this.transactionDetailFormGroup.reset();
      this.secretWordsFormGroup.reset();
      this.stepper.reset();
    }
  }

  alphaNumericValidator(min: number, max: number) {
    return [
      Validators.minLength(min),
      Validators.maxLength(max),
      Validators.pattern('[a-zA-Z0-9]*')
    ];
  }

  nextStep(index: number) {
    this.stepper.selectedIndex = index;
  }

  goToNextStep() {
    if (this.addressFormGroup.get('doneDeposit').value) {
      this.nextStep(1);
    } else {
      this.nextStep(2);
    }
  }

  doneDeposiToAccountToggle() {
    const val = "0000000000000000000000000000000000000000000000000000000000000000";
    const transactionIdField = this.getTransactionId();
    if (this.getDoneDeposit().value) {
      transactionIdField.setValue(val);
    } else {
      transactionIdField.setValue('');
    }
  }

  isValidEmail() {
    this.errorMessage.email = '';
    const field = this.getEmail();
    if (field.invalid && (field.dirty || field.touched)) {
      this.errorMessage.email = 'Please input a valid email...';
      return false;
    }

    return true;
  }

  isValidPublicAddress() {
    this.errorMessage.publicAddress = '';
    const field = this.getPublicAddress();

    if (field.invalid && (field.dirty || field.touched)) {
      if (field.value === '') {
        this.errorMessage.publicAddress = 'Please input a valid public/wallet address...';
        return false;
      }

      if (field.errors.minlength || field.errors.maxlength) {
        this.errorMessage.publicAddress = 'Allowed characters should be [a-zA-Z0-9] within 34 to 40 characters in length';
        return false;
      }

      if (field.errors.pattern) {
        this.errorMessage.publicAddress = 'Only [a-zA-Z0-9] characters are allowed....';
        return false;
      }
    }

    return true;
  }

  isValidTransactionId() {
    this.errorMessage.transactionId = '';
    const field = this.getTransactionId();

    if (field.invalid && (field.dirty || field.touched)) {
      if (field.value === '') {
        this.errorMessage.transactionId = 'Please input a valid transaction ID...';
        return false;
      }

      if (field.errors.minlength || field.errors.maxlength) {
        this.errorMessage.transactionId = 'Allowed characters should be [a-zA-Z0-9] within 64 to 70 characters in length';
        return false;
      }

      if (field.errors.pattern) {
        this.errorMessage.transactionId = 'Only [a-zA-Z0-9] characters are allowed....';
        return false;
      }
    }

    return true;
  }

  isValidSecretWord(num: number) {
    this.errorMessage.secretWords[num] = '';
    const field = this.getSecretWords(num);

    if (field.invalid && (field.dirty || field.touched)) {
      if (field.value === '') {
        this.errorMessage.secretWords[num] = 'Please input a valid secret word...';
        return false;
      }

      if (field.errors.minlength || field.errors.maxlength) {
        this.errorMessage.secretWords[num] = 'Allowed characters should be [a-zA-Z0-9] within 5 to 15 characters in length';
        return false;
      }

      if (field.errors.pattern) {
        this.errorMessage.secretWords[num] = 'Only [a-zA-Z0-9] characters are allowed....';
        return false;
      }
    }

    return true;
  }

  getEmail() {
    return this.addressFormGroup.get('email');
  }

  getPublicAddress() {
    return this.addressFormGroup.get('publicAddress');
  }

  getDoneDeposit() {
    return this.addressFormGroup.get('doneDeposit');
  }

  getTransactionId() {
    return this.transactionDetailFormGroup.get('transactionId');
  }

  getSecretWords(num: number) {
    return this.secretWordsFormGroup.get('secretWord' + num);
  }

}
