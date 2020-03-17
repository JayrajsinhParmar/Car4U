import { UserRegisterComponent } from './UserRegister/user-register/user-register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  {
    path:'',
    component :SidebarComponent,
    pathMatch:'full'
  },
  {
    path:'Register',
    component:UserRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
