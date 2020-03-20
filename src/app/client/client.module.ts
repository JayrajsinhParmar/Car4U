import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ViewCarComponent } from './view-car/view-car.component';
import { YourBookingsComponent } from './your-bookings/your-bookings.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';


@NgModule({
  declarations: [ClientDashboardComponent, ViewCarComponent, YourBookingsComponent, UpdateDocumentComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
