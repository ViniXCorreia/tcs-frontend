import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesComponent } from './pages.components';

@NgModule({
    imports: [RouterModule.forChild([

        {
            path: '',
            component:PagesComponent,
           
            children: [{ path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
            { path: 'service', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule) },
            { path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },]
        }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
