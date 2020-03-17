import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserRequestesComponent } from './admin-user-requestes.component';

describe('AdminUserRequestesComponent', () => {
  let component: AdminUserRequestesComponent;
  let fixture: ComponentFixture<AdminUserRequestesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserRequestesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserRequestesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
