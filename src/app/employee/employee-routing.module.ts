import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'dashboard',
    loadChildren:() =>import('./dashboard/dashboard.module').then(k =>k.DashboardModule)
  },
  {
    path:'carDetails',
    loadChildren:() =>import('./car-details/car-details.module').then(k =>k.CarDetailsModule)
  },
  {
    path:'maintance',
    loadChildren:() => import('./maintance/maintance.module').then(k=>k.MaintanceModule)
  },
  {
    path:'carReview',
    loadChildren:() => import('./car-review/car-review.module').then(k=>k.CarReviewModule)
  },
  {
    path:'feedback',
    loadChildren:() =>import('./feedback/feedback.module').then(k=>k.FeedbackModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
