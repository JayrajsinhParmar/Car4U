import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsOfCarComponent } from './requests-of-car.component';

describe('RequestsOfCarComponent', () => {
  let component: RequestsOfCarComponent;
  let fixture: ComponentFixture<RequestsOfCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsOfCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsOfCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
