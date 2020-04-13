import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {

  static TYPE = {
    generic: 0,
    network_error: 1,
    error: 2,
    warning: 3,
    success: 4,
  };

  type = null;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {type: 'error', title: 'Title', reason: '', status: ''}) {
    this.type = data.type;
  }

  ngOnInit() {
  }

  typeIs(type: string) {
    return this.type === MessageDialogComponent.TYPE[type];
  }
}
