import { UserRegisterComponent } from './UserRegister/user-register/user-register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientRegisterComponent } from 'src/app/ClientRegister/client-register/client-register.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'Register',
    component: UserRegisterComponent
  },
  {
    path: 'ClientRegister',
    component: ClientRegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
