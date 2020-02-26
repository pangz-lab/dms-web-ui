import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSummaryChartComponent } from './transaction-summary-chart.component';

describe('TransactionSummaryChartComponent', () => {
  let component: TransactionSummaryChartComponent;
  let fixture: ComponentFixture<TransactionSummaryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionSummaryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionSummaryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
