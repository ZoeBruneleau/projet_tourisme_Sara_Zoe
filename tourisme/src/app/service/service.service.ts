import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Tourisme} from "../Tourisme";
import {DomUtil} from "leaflet";
import get = DomUtil.get;
import {catchError, filter, Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";
import {User} from "../User";
import {Comment} from "../comment";


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
  public list_lieu?:Tourisme[];

  baseURL: string = "http://localhost:3000/";

  public getAllLieu() {
    return this.http.get<Tourisme[]>("/lieu");
  }

  public getLieuId(id: string | null) {
    return this.http.get<any>("/lieu/"+id).pipe(map((resp) => {
      return resp.lieu
    }));
  }

  public getComment() {
    return this.http.get<Comment[]>("/comment");
  }

  addTodo(com:any): Observable<any>{

      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(com);
      console.log(body)
      return this.http.post<Comment>('/comment', body,{'headers':headers})
        .pipe(
      catchError((err) => {
          console.error(err);
          throw err;
        }
      )
        );
  }

  getComments(): Observable<Comment[]> {

    return this.http.get<Comment[]>(this.baseURL + 'comment')
  }
  /*
  addTodo(newlieu: Partial<{ pseudo: string | null; note: string | null; comment: string | null; }>): Observable<any>{
    console.log(newlieu);
    return this.http.post<any>("/comment", newlieu);
  } */

}



