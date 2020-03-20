import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdminUserRequestesComponent } from './admin/admin/user-requestes/admin-user-requestes.component';
import { AdminDashboardComponent } from './admin/admin/dashboard/admin-dashboard.component';
import { CommonSidebarComponent } from './common-sidebar/common-sidebar.component';
import { CommonLoginComponent } from './common-login/common-login.component';
import { CoreModule } from './shared/core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    AdminUserRequestesComponent,
    AdminDashboardComponent,
    CommonSidebarComponent,
    CommonLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
