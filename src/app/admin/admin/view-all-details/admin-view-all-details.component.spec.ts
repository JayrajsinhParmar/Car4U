import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllDetailsComponent } from './admin-view-all-details.component';

describe('AdminViewAllDetailsComponent', () => {
  let component: AdminViewAllDetailsComponent;
  let fixture: ComponentFixture<AdminViewAllDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewAllDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
