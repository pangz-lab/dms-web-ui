import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainBodyComponent } from './app-main-body.component';

describe('AppMainBodyComponent', () => {
  let component: AppMainBodyComponent;
  let fixture: ComponentFixture<AppMainBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
