import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewBookingDetailsComponent } from './admin-view-booking-details.component';

describe('AdminViewBookingDetailsComponent', () => {
  let component: AdminViewBookingDetailsComponent;
  let fixture: ComponentFixture<AdminViewBookingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewBookingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
