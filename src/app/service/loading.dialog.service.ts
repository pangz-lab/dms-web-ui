import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoadingDialogComponent } from '../components/dialog/loading-dialog/loading-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingDialogService {

  private dialogRef;
  constructor(public dialog: MatDialog) { }
  openDialog(data): void {
      this.dialogRef = this.dialog.open(LoadingDialogComponent, {
          width: '600px',
          data: data
      });

      this.dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          let animal;
          animal = result;
      });
  }

  close(): void {
    this.dialogRef.close();
  }
}
