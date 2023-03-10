import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ServiceListComponent } from './list/service-list.component';
import { ServiceComponent } from './service.component';

const routes: Routes = [{
  path: '', children: [
    { path: '', redirectTo: 'list', pathMatch: 'prefix' },
  { path: 'list', component: ServiceListComponent }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule {

}
