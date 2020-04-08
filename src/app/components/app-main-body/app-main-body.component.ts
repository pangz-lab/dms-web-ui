import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './app-main-body.component.html',
  styleUrls: ['./app-main-body.component.css']
})
export class AppMainBodyComponent implements OnInit  {

  @Input() pageHeaderTitle: string;
  // @ViewChild('nameInput', true) inputNameRef: ElementRef;
  // pageBody: ElementRef;
  // @ViewChild('someInput') someInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }



}
