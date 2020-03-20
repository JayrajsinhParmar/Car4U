import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintanceRoutingModule } from './maintance-routing.module';
import { MaintanceComponent } from './maintance.component';


@NgModule({
  declarations: [MaintanceComponent],
  imports: [
    CommonModule,
    MaintanceRoutingModule
  ]
})
export class MaintanceModule { }
