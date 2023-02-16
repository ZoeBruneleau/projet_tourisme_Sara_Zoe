import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tourisme} from "../mock/Tourisme";
import {catchError, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Comment} from "../mock/comment";


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public list_lieu?:Tourisme[];

  constructor(private http:HttpClient) { }

  public getAllLieu() :Observable<Tourisme[]>{
    return this.http.get<Tourisme[]>("/lieu");
  }

  public getLieuId(id: string | null) :Observable<Tourisme>{
    return this.http.get<any>("/lieu/"+id).pipe(map((resp) => {
      return resp.lieu
    }));
  }

  public getComment() :Observable<Comment[]> {
    return this.http.get<Comment[]>("/comment");
  }

  public getCommentByLieuId(idl:number) :Observable<Comment[]>{
    return this.http.get<Comment[]>("/comment/"+idl);
  }

  public addComment(com: any): Observable<Comment>{
      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(com);
      return this.http.post<Comment>('/comment', body,{'headers':headers})
        .pipe(
      catchError((err) => {
          console.error(err);
          throw err;
        }
      )
        );
  }

}



