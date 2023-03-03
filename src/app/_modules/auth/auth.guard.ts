import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard  {

    constructor(private router: Router) { }

    canActivate() {
        return true;
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/auth/login']);
        return false;
    }
}