import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeePaymentComponent } from './admin-employee-payment.component';

describe('AdminEmployeePaymentComponent', () => {
  let component: AdminEmployeePaymentComponent;
  let fixture: ComponentFixture<AdminEmployeePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
