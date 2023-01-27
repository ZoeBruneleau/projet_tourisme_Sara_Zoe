import { Injectable } from '@angular/core';
import {User} from "../User";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public userEmail!: string;

  public listUser? : User[];



  getUserConfig(){
    console.log('user');
    return this.http.get<User[]>("/getUser")
  }

  public getListUser() {
    return this.getUserConfig().subscribe((res) => {
      this.listUser = res;
    })
  }
}
