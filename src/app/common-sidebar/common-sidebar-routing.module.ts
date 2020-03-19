import { AppPage } from './../../../e2e/src/app.po';
import { AdminModule } from './../admin/admin/admin.module';
import { AdminDashboardComponent } from '../admin/admin/dashboard/admin-dashboard.component';
import { AdminUserRequestesComponent } from '../admin/admin/user-requestes/admin-user-requestes.component';
import { CommonSidebarComponent } from './common-sidebar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegisterComponent } from '../user-register/user-register.component';


const routes: Routes = [
  {
    path: '',
    component: CommonSidebarComponent,
    children: [
      {
        path: 'userRegister',
        component: UserRegisterComponent
      },
      {
        path:'Admin',
        loadChildren: () => import('../admin/admin/admin.module').then(k => k.AdminModule)
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonSidebarRoutingModule { }
