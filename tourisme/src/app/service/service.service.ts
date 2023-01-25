import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tourisme} from "../Tourisme";
import {DomUtil} from "leaflet";
import get = DomUtil.get;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private lieu =this.getConfig()
  constructor(private http:HttpClient) { }


  configUrl = "getTourism"

  public getConfig() {
    return this.http.get<Tourisme[]>(this.configUrl);
  }

  public getLieu(){
  }
}


