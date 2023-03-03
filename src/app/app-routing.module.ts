import { RouterModule } from '@angular/router';
import { inject, NgModule } from '@angular/core';
import { AuthModule } from './_modules/auth/auth.module';
import { AuthGuard } from './_modules/auth/auth.guard';
import { PagesModule } from './_modules/pages/pages.module';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'auth',
                pathMatch:'full'
            },
            { path: 'auth', loadChildren: () => AuthModule },
            {
                path: 'pages', loadChildren: () => PagesModule,
                canActivate: [() => inject(AuthGuard).canActivate()],
                canActivateChild: [() => inject(AuthGuard).canActivate()],
               
            },
            // { path: 'notfound', component: NotfoundComponent },
            // { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
