import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component:ClientDashboardComponent
  },
  {
    path:'dashboard',
    loadChildren:() =>import('./client-dashboard/client-dashboard.module').then(k =>k.ClientDashboardModule)
  },
  {
    path:'viewCar',
    loadChildren:() =>import('./view-car/view-car.module').then(k =>k.ViewCarModule)
  },
  {
    path:'yourBooking',
    loadChildren:() => import('./your-bookings/your-bookings.module').then(k=>k.YourBookingsModule)
  },
  {
    path:'updateDocument',
    loadChildren:() => import('./update-document/update-document.module').then(k=>k.UpdateDocumentModule)
  },
  {
    path:'feedback',
    loadChildren:() =>import('./feedback/feedback.module').then(k=>k.FeedbackModule)
  },
  {
    path:'aboutus',
    loadChildren : () =>import('./aboutus/aboutus.module').then(k=>k.AboutusModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
