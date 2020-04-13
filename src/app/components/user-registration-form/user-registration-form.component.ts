import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  NgForm
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
  @Output() registrationCompleted = new EventEmitter<boolean>();
  @Output() formSubmitted         = new EventEmitter<boolean>();
  @Output() requestError          = new EventEmitter<boolean>();
  @ViewChild('stepper', { static: false }) stepper: MatStepper;
  @ViewChild('formDirectAddressFormGroup', { static: false }) fdAddressFormGroup: NgForm;
  @ViewChild('formDirectTransactionDetailFormGroup', { static: false }) fdTransactionDetailFormGroup: NgForm;
  @ViewChild('formDirectSecretWordsFormGroup', { static: false }) fdSecretWordsFormGroup: NgForm;

  responseData: ResponseData;
  addressFormGroup: FormGroup;
  transactionDetailFormGroup: FormGroup;
  secretWordsFormGroup: FormGroup;
  withDeposit = true;
  validRegistration = false;
  formFieldAppearance = 'standard';
  hideWord1 = true;
  hideWord2 = true;
  hideWord3 = true;
  errorMessage = {
    email: '',
    publicAddress: '',
    transactionId: '',
    secretWords: []
  };
  defaultTxId = '0000000000000000000000000000000000000000000000000000000000000000';

  constructor(
    private formBuilder: FormBuilder,
    private poolService: PoolService
  ) {}

  ngOnInit() {
    this.addressFormGroup = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.minLength(10),
        Validators.maxLength(100)
      ]],
      publicAddress: ['', this.alphaNumericValidator(34, 40)],
      doneDeposit: [true]
    });
    this.transactionDetailFormGroup = this.formBuilder.group({
      transactionId: ['', this.alphaNumericValidator(64, 70)]
    });
    this.secretWordsFormGroup = this.formBuilder.group({
      secretWord1: ['', this.alphaNumericValidator(5, 15)],
      secretWord2: ['', this.alphaNumericValidator(5, 15)],
      secretWord3: ['', this.alphaNumericValidator(5, 15)]
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

      this.formSubmitted.emit(true);
      this.poolService.registerUser(user)
      .subscribe(
        (result) => {
          let success = true;
          this.responseData = result;
          console.log(' Data :: ');
          console.log(result);

          if (result.status.code > 201) {
            success = false;
          }

          this.registrationCompleted.emit(success);
          this.resetForm();
        }, (error) => {
          this.requestError.emit(true);
        }
      );
    }
  }

  resetForm() {
    this.addressFormGroup.reset();
    this.transactionDetailFormGroup.reset();
    this.secretWordsFormGroup.reset();
    this.stepper.reset();
    // Error fields reset
    this.fdAddressFormGroup.resetForm();
    this.fdTransactionDetailFormGroup.resetForm();
    this.fdSecretWordsFormGroup.resetForm();
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

  // valueLength = () => {
  //   emailAddress: this.getEmail().value.length ?? 0,
  //   publicAddress: this.getPublicAddress().value.length ?? 0,
  //   transactionId: this.getTransactionId().value.length ?? 0,
  //   secretWord1: this.getSecretWords(1).value.length ?? 0,
  //   secretWord2: this.getSecretWords(2).value.length ?? 0,
  //   secretWord3: this.getSecretWords(3).value.length ?? 0
  // }

  doneDeposiToAccountToggle(el) {
    const transactionIdField = this.getTransactionId();
    if (el.checked) {
      transactionIdField.setValue('');
    } else {
      transactionIdField.setValue(this.defaultTxId);
    }
  }

  depositedToAccount() {
    return this.getDoneDeposit().value;
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
      // this.secretWordIsUnique();
    }

    return true;
  }

  secretWordIsUnique() {
    //@TODO fix the unique words
    // const word1 = this.getSecretWords(1).value;
    // const word2 = this.getSecretWords(2).value;
    // const word3 = this.getSecretWords(3).value;
    // const sameWord = (
    //   word1 === word2 ||
    //   word1 === word3 ||
    //   word2 === word3
    // );
    // if (sameWord) {
    //   this.errorMessage.secretWords[3] = 'Words should be unique...';
    //   console.log("Has same value");
    //   return false;
    // }
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
