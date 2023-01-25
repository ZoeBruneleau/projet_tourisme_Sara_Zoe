import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tourisme} from "../Tourisme";
import {DomUtil} from "leaflet";
import get = DomUtil.get;
import {filter} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private list_lieu =this.getConfig()
  constructor(private http:HttpClient) { }


  configUrl = "getTourism"

  public getConfig() {
    return this.http.get<Tourisme[]>(this.configUrl);
  }

  public getLieu(id: number){
  }
}


