import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfo = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http:HttpClient) {
    this.loadUserInfo();
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    this._isLoggedIn$.next(!!token);
    return !this.jwtHelper.isTokenExpired(token);

  }
  userLogin(login:any):Observable<boolean>{

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
          localStorage.setItem("id", login.mail);
          this._isLoggedIn$.next(true);
          this.log(login.mail as string,login.mdp as string);
          const decodedUser = this.jwtHelper.decodeToken(token);
          this.userInfo.next(decodedUser);
          return true;

        }));

    }
    return of(false);



  }

  log(mail : string, mdp :string) {
    return this.http.post('/login',{mail,mdp} ).subscribe((res: any) => {

    })
  };



  loadUserInfo() {
    let userdata = this.userInfo.getValue();
    if (!userdata) {
      const access_token = localStorage.getItem('id');
      if (access_token) {
        userdata = this.jwtHelper.decodeToken(access_token);
        this.userInfo.next(userdata);
      }
    }
  }

}
