import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tourisme} from "../Tourisme";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  configUrl = "getTourism"

  public getConfig() {
    return this.http.get<Tourisme[]>(this.configUrl);
  }
}


