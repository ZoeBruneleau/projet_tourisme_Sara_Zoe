import { Injectable } from '@angular/core';
import {User} from "../User";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./api.service";
import {BehaviorSubject} from "rxjs";
import {tap} from "rxjs/operators";
import {FormControl, ɵFormGroupRawValue, ɵGetProperty, ɵTypedOrUntyped} from "@angular/forms";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http:HttpClient, private apiService: ApiService,private routeur : Router ) {
    const token = localStorage.getItem('profanis_auth');
    this._isLoggedIn$.next(!!token);
  }


  public listUser? : User[];
  public currUser? : User;

  getUserConfig(){
    console.log('user');
    return this.http.get<User[]>("/getUser")
  }

  public getListUser() {
    return this.getUserConfig().subscribe((res) => {
      this.listUser = res;
    })
  }

  login(username: string, password: string) {

   /*
    this.http.post('/login', {username,password}).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('profanis_auth', response.token);

        alert("Connexion réussie");
        this.routeur.navigate(['/account']);
      })
    ) */

    return this.http.post('/login', {username,password}) .subscribe((res: any) => {
      alert("Connexion réussie");
      this.routeur.navigate(['/account']);
    })



  }



}
