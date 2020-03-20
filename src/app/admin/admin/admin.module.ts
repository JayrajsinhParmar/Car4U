import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminCarownerRequestsComponent } from './carowner-requests/admin-carowner-requests.component';
import { AdminViewAllDetailsComponent } from './view-all-details/admin-view-all-details.component';
import { AdminViewBookingDetailsComponent } from './view-booking-details/admin-view-booking-details.component';
import { AdminEmployeePaymentComponent } from './employee-payment/admin-employee-payment.component';
import { AdminCarDetailsComponent } from './car-details/admin-car-details.component';


@NgModule({
  declarations: [AdminCarownerRequestsComponent, AdminViewAllDetailsComponent, AdminViewBookingDetailsComponent, AdminEmployeePaymentComponent, AdminCarDetailsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
