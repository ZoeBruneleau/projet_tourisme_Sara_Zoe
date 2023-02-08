import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    private authService:AuthService,
    private router:Router){}


  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : boolean
    | UrlTree
    | Observable<boolean
    | UrlTree>
    | Promise<boolean
    | UrlTree> {
    let userData = this.authService.userInfo.getValue();
    if (userData) { // sub represents user id value
      if (state.url.indexOf("/login") != -1) {
        // loggin user trying to access login page
        this.router.navigate(["/account"]);
        return false;
      } else {
        return true;
      }
    } else {
      if (state.url.indexOf("/login") == -1) {
        // not logged in users only navigate to login page
        this.router.navigate(["/login"]);
        return false;
      } else {
        return true;
      }
    }


  }

}
