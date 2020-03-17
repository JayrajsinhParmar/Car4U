import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUserRequestesComponent } from '../admin-user-requestes/admin-user-requestes.component';


const routes: Routes = [
  {
    path:'',
    component: AdminUserRequestesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
