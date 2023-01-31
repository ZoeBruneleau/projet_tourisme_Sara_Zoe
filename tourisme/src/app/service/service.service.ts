import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Tourisme} from "../Tourisme";
import {DomUtil} from "leaflet";
import get = DomUtil.get;
import {catchError, filter, Observable, of} from "rxjs";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  baseURL: string = "http://localhost:3000/";


  constructor(private http:HttpClient) { }
  public list_lieu:Tourisme[]=[];

  public getConfig() {
    console.log("getConfig")
    return this.http.get<Tourisme[]>("/getTourism");
  }

  getAllLieu(): Observable<any> {
    return this.http.get<any>(this.baseURL + 'lieu').pipe(map((resp) => {
      return resp.lieu
    }))
  }

  public addLieu(newlieu: Tourisme){
    console.log("addTodo")
    return this.http.post(this.baseURL + 'lieu', newlieu).pipe(map((resp) => {
      return resp
    }))
  }



}



