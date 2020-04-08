import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSummaryHeaderComponent } from './transaction-summary-header.component';

describe('TransactionSummaryHeaderComponent', () => {
  let component: TransactionSummaryHeaderComponent;
  let fixture: ComponentFixture<TransactionSummaryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionSummaryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionSummaryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
