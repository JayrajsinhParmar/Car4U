import { AdminViewAllDetailsComponent } from './view-all-details/admin-view-all-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUserRequestesComponent } from './user-requestes/admin-user-requestes.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { AdminCarownerRequestsComponent } from './carowner-requests/admin-carowner-requests.component';
import { AdminViewBookingDetailsComponent } from './view-booking-details/admin-view-booking-details.component';
import { AdminEmployeePaymentComponent } from './employee-payment/admin-employee-payment.component';
import { AdminCarDetailsComponent } from './car-details/admin-car-details.component';


const routes: Routes = [
  {
    path:'',
    component: AdminDashboardComponent,
  },
 
  {
    path :'dashboard',
    component:AdminDashboardComponent
  },
  {
    path:'userRequests',
    component:AdminUserRequestesComponent
  },
  {
    path :'carOwnerRequests',
    component:AdminCarownerRequestsComponent
  },
  {
    path:'viewAllDetails',
    component:AdminViewAllDetailsComponent
  },
  {
    path:'viewBookingDetails',
    component:AdminViewBookingDetailsComponent
  },
  {
    path:'employeePayment',
    component:AdminEmployeePaymentComponent
  },
  {
    path:'carDetails',
    component:AdminCarDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
