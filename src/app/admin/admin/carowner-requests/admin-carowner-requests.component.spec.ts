import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarownerRequestsComponent } from './admin-carowner-requests.component';

describe('AdminCarownerRequestsComponent', () => {
  let component: AdminCarownerRequestsComponent;
  let fixture: ComponentFixture<AdminCarownerRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCarownerRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarownerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
