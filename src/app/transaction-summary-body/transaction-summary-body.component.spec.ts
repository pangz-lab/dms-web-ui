import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSummaryBodyComponent } from './transaction-summary-body.component';

describe('TransactionSummaryBodyComponent', () => {
  let component: TransactionSummaryBodyComponent;
  let fixture: ComponentFixture<TransactionSummaryBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionSummaryBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionSummaryBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
