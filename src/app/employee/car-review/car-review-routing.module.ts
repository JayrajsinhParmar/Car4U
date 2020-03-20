import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarReviewComponent } from './car-review.component';


const routes: Routes = [
  {
    path:'',
    component:CarReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarReviewRoutingModule { }
