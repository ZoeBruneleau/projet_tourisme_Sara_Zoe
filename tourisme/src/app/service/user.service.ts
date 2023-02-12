import { Injectable } from '@angular/core';
import {User} from "../User";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {map, tap} from "rxjs/operators";
import {FormControl, ɵFormGroupRawValue, ɵGetProperty, ɵTypedOrUntyped} from "@angular/forms";
import {Router} from "@angular/router";
import {Tourisme} from "../Tourisme";
import {Liste} from "../Liste";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  public currUser? : User;

  private list?:Liste[];
  public lieus:Tourisme[] = [];

  constructor(private http:HttpClient , private router :Router) {
    const token = localStorage.getItem('profanis_auth');
    this._isLoggedIn$.next(!!token);


  }


  getUserConfig(){
    return this.http.get<User[]>("/user")
  }

  getUserById(id: string | null){
    return this.http.get<any>("/user/"+id).pipe(map((resp) => {
      return resp.user;
    }));

  }

  getUserList(id: string | null)  {
    return this.http.get<any>("/liste/"+id).subscribe((res) => {
      this.list = res;

      this.list?.forEach(value =>
        this.http.get<any>("/lieu/"+value.idL).subscribe((resp) => {
          this.lieus?.push(resp.lieu)
        }) );

      });
  }


  subcribe(sub:any) {
    const headers = { 'content-type': 'application/json'}

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

  edit(el:any, id?:number){
    const headers = { 'content-type': 'application/json'}

    const body ={id: id,
      name: el.name,
      firstName: el.firstName,
      mdp:el.mdp,
      mail: el.mail,
      ville: el.ville,
      CP: el.CP}

    return this.http.put<User>('/user' ,body,{'headers':headers}).subscribe((res: any) => {
      alert("Vos informations ont été modifiés");
      this.router.navigate(["/home"]);
    })

  }




}
