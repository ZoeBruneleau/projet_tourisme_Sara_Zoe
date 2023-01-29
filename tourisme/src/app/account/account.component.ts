import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../User";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public currUser : User | undefined ;
  public userListConnected : User[]=[];

  constructor(private serviceUser:UserService) {
    this.currUser = this.serviceUser.currUser ;
  }

  getCurrUserById(id:number){
    this.serviceUser.getUserConfig()
      .subscribe((res) => {
        this.userListConnected = res.filter((todo: User) => todo.id == id);
      });

  }
  ngOnInit(): void {
  }

}
