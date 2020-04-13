import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from './../../service/dialog.service';
import { MessageDialogComponent } from './../dialog/message-dialog/message-dialog.component';

@Component({
  selector: 'app-main-registration',
  templateUrl: './main-registration.component.html',
  styleUrls: ['./main-registration.component.css']
})
export class MainRegistrationComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private dialogService: DialogService
  ) { }

  public loaderShown = false;

  ngOnInit() {}

  goToRegsitration() {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  showSnackBarMessage(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  confirmRegistration(successful: boolean) {
    if (successful) {
      this.showSnackBarMessage('Registration Successful!', 'ヽ(´ー｀)ﾉ');
    } else {
      this.showFailedRegistrationMessage();
    }
    this.toggleFormProgressBar();
  }

  registrationRequestError() {
    this.toggleFormProgressBar();
  }

  showFailedRegistrationMessage() {
    this.dialogService.openDialog({
      type: MessageDialogComponent.TYPE.warning,
      title: 'Registration Unsuccesful!',
      reason: 'Error: Email address or Public address already exist!',
      status: '500'
    });
  }

  toggleFormProgressBar() {
    this.loaderShown = !this.loaderShown;
  }

  registrationSubmitted() {
    this.toggleFormProgressBar();
  }

}
