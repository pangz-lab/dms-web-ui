import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailGroupComponent } from './transaction-detail-group.component';

describe('TransactionDetailGroupComponent', () => {
  let component: TransactionDetailGroupComponent;
  let fixture: ComponentFixture<TransactionDetailGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDetailGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
