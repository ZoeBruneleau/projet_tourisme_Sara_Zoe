import { Injectable } from '@angular/core';
import {User} from "../User";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {map, tap} from "rxjs/operators";
import {FormControl, ɵFormGroupRawValue, ɵGetProperty, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http:HttpClient ) {
    const token = localStorage.getItem('profanis_auth');
    this._isLoggedIn$.next(!!token);
  }


  public listUser? : User[];
  public currUser? : User;

  getUserConfig(){
    return this.http.get<User[]>("/user")
  }

  getUserById(id: string | null){
    return this.http.get<any>("/user/"+id).pipe(map((resp) => {
      return resp.users;
    }));


  }






}
