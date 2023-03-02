import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', loadChildren: () => LoginModule }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
