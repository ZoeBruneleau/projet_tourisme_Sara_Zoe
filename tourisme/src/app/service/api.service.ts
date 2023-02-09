import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from "@angular/router";



@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private router : Router) {}

  login(username: string, password: string) {

    return this.http.post('/login', {username,password}) .subscribe((res: any) => {

      alert("Connexion réussie");
      this.router.navigate(['/account']);
    });

  }


}
