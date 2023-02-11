import { Injectable } from '@angular/core';
import {User} from "../User";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {map, tap} from "rxjs/operators";
import {FormControl, ɵFormGroupRawValue, ɵGetProperty, ɵTypedOrUntyped} from "@angular/forms";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http:HttpClient , private router :Router) {
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
      return resp.user;
    }));


  }

  subcribe(sub:any) {
    const headers = { 'content-type': 'application/json'}
    //const body=JSON.stringify(sub);
    /*
    {id: 10,
      name: sub.name,
      firstName: sub.firstName,
      mdp:sub.mdp,
      mail: sub.mail,
      ville: sub.ville,
      CP: sub.CP} */
    const body ={id: 10,
      name: sub.name,
      firstName: sub.firstName,
      mdp:sub.mdp,
      mail: sub.mail,
      ville: sub.ville,
      CP: sub.CP}

    return this.http.post<User>('/user' ,body,{'headers':headers}).subscribe((res: any) => {
      alert("Merci pour votre inscription, bienvenue chez TripExperiences !");
      this.router.navigate(["/home"]);
    })
  }




}
