import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarReviewComponent } from './car-review/car-review.component';


@NgModule({
  declarations: [CarDetailsComponent, CarReviewComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
