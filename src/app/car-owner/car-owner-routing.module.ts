import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./car-owner-dashboard/car-owner-dashboard.module').then(k=>k.CarOwnerDashboardModule)
  },
  {
    path:'dashboard',
    loadChildren: () => import('./car-owner-dashboard/car-owner-dashboard.module').then(k=>k.CarOwnerDashboardModule)
  },
  {
    path:'addCar',
    loadChildren: () => import('./add-car/add-car.module').then(k=>k.AddCarModule)
  },
  {
    path:'requestsOfCar',
    loadChildren: () => import('./requests-of-car/requests-of-car.module').then(k=>k.RequestsOfCarModule)
  },
  {
    path:'updateDocument',
    loadChildren: () => import('./update-document/update-document.module').then(k=>k.UpdateDocumentModule)
  },
  {
    path:'updateStatus',
    loadChildren: () => import('./update-status/update-status.module').then(k=>k.UpdateStatusModule)
  },
  {
    path:'trips',
    loadChildren: () => import('./trips/trips.module').then(k=>k.TripsModule)
  },
  {
    path:'aboutus',
    loadChildren: () => import('../client/aboutus/aboutus.module').then(k=>k.AboutusModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarOwnerRoutingModule { }
