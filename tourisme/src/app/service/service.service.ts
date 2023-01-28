import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tourisme} from "../Tourisme";
import {DomUtil} from "leaflet";
import get = DomUtil.get;
import {filter, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
  public list_lieu?:Tourisme[];

  public getConfig() {
    return this.http.get<Tourisme[]>("/getTourism");
  }

  public addTodo(newlieu: Tourisme): Observable<number> {
    return this.http.post<number>('/getTourism', newlieu);
  }


  public getAllLieu():Tourisme[] | undefined {
    this.getConfig()
      .subscribe((res) => {
      this.list_lieu = res;
    })
    return this.list_lieu
  }

  public getLieu(id: string | null){
    for (let lieu in this.getConfig()){
      console.log("lieu")
      console.log(lieu)
    }


    this.getConfig()
      .subscribe((res) => {
        this.list_lieu = res.filter((todo: Tourisme)=> {
          todo.id == Number(id);
        });
      });
    console.log("getLieu")
    console.log(Number(id))
    return(this.list_lieu)
  }
}



