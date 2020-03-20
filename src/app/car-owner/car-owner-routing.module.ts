import { UpdateStatusModule } from './update-status/update-status.module';
import { UpdateDocumentModule } from './../client/update-document/update-document.module';
import { TripsComponent } from './trips/trips.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { RequestsOfCarComponent } from './requests-of-car/requests-of-car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarOwnerDashboardComponent } from './car-owner-dashboard/car-owner-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateDocumentComponent } from './update-document/update-document.component';
import { AboutusComponent } from '../client/aboutus/aboutus.component';
import { LogOutComponent } from '../client/log-out/log-out.component';


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
    loadChildren: () => import('./add-car/add-car.module').then(k=>k.AddCarModule)
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
  {
    path:'logout',
    component:LogOutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarOwnerRoutingModule { }
