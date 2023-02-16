import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subscription} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient, private router :Router) {}

  public userLogin(login:any):Observable<boolean>{
    if(login &&
      login.mail &&
      login.mdp) {
      const sampleJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs";

      return of(sampleJWT).pipe(
        map((token) => {
          if(!token){
            return false;
          }
          localStorage.setItem("access_token", token);
          localStorage.setItem("username", login.mail);
          this._isLoggedIn$.next(true);
          this.log(login.mail as string,login.mdp as string);
          const decodedUser = this.jwtHelper.decodeToken(token);
          this.userInfo.next(decodedUser);
          return true;

        }));

    }
    return of(false);

  }
  public log(mail : string, mdp :string) : Subscription {
    this.router.navigate(['/home']);
    return this.http.post('/login',{mail,mdp} ).subscribe((res: any) => {

    })
  };
  public logout() : void{
    this.router.navigate(['/home']).then(r => "");
    localStorage.clear();
  }

}
