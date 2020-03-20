import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarOwnerRoutingModule } from './car-owner-routing.module';
import { CarOwnerDashboardComponent } from './car-owner-dashboard/car-owner-dashboard.component';
import { AddCarComponent } from './add-car/add-car.component';
import { RequestsOfCarComponent } from './requests-of-car/requests-of-car.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';
import { UpdateStatusComponent } from './update-status/update-status.component';


@NgModule({
  declarations: [CarOwnerDashboardComponent, AddCarComponent, RequestsOfCarComponent, UpdateDocumentComponent, UpdateStatusComponent],
  imports: [
    CommonModule,
    CarOwnerRoutingModule
  ]
})
export class CarOwnerModule { }
