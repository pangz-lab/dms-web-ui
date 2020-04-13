import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageDialogComponent } from '../components/dialog/message-dialog/message-dialog.component';
import { LoadingDialogComponent } from '../components/dialog/loading-dialog/loading-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private dialogRef;
  constructor(public dialog: MatDialog) { }
  openDialog(dialogData): void {
    this.dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '25%',
      data: dialogData,
      disableClose: true,
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Message dialog was closed');
    });
  }

  openLoadingDialog(data): void {
    this.dialogRef = this.dialog.open(LoadingDialogComponent, {
      width: '40%',
      disableClose: true,
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Loading dialog was closed');
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
