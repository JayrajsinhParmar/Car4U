import { CarOwnerModule } from './../car-owner/car-owner.module';
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
      },
      {
        path:'client',
        loadChildren :() =>import('../client/client.module').then(k=> k.ClientModule)
      },
      {
        path:'carOwner',
        loadChildren: ()=>import('../car-owner/car-owner.module').then(k=>CarOwnerModule)
      },
      {
        path:'employee',
        loadChildren:()=> import('../employee/employee.module').then(k=>k.EmployeeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonSidebarRoutingModule { }
