import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getConfig(){
    console.log('getCOnfig');
    return this.http.get('getTourism');
  }
}
