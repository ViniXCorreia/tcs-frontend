import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.components';
import { AppLayoutModule } from './layout/app.layout.module';
import { ServiceModule } from './service/service.module';

@NgModule({
    declarations: [PagesComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        AppLayoutModule,
        ServiceModule
   ],

})
export class PagesModule { }
