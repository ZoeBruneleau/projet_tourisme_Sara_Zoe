import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Tourisme} from "../Tourisme";
import {DomUtil} from "leaflet";
import get = DomUtil.get;
import {filter, Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
  public list_lieu?:Tourisme[];

  public getConfig() {
    return this.http.get<Tourisme[]>("/lieu");
  }

  addTodo(newlieu: Partial<{ pseudo: string | null; note: string | null; comment: string | null; }>): Observable<any>{
    console.log("add")
    return this.http.post<any>("/comment", "ll");
  }


}



