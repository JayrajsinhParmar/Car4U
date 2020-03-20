import { CommonLoginComponent } from './common-login/common-login.component';
import { CommonSidebarComponent } from './common-sidebar/common-sidebar.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientRegisterComponent } from 'src/app/ClientRegister/client-register/client-register.component';
import { ClientDashboardComponent } from 'src/app/client-dashboard/client-dashboard.component';
import { AdminDashboardComponent } from './admin/admin/dashboard/admin-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: CommonLoginComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./common-sidebar/common-sidebar.module').then(m => m.CommonSidebarModule)
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
