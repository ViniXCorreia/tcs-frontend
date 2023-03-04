import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { TableModule } from 'primeng/table';
import { ServiceListComponent } from './list/service-list.component';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [
    ServiceComponent,ServiceListComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    TableModule,
    MultiSelectModule
  ]
})
export class ServiceModule { }
