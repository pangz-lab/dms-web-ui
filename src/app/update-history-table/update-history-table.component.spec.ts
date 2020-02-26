import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHistoryTableComponent } from './update-history-table.component';

describe('UpdateHistoryTableComponent', () => {
  let component: UpdateHistoryTableComponent;
  let fixture: ComponentFixture<UpdateHistoryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHistoryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
