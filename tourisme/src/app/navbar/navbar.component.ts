import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../mock/User";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public currUser : User | undefined ;
  public userListConnected : User[]=[];

  public id : number ;

  constructor(private serviceUser:UserService) {
    this.id = Number(localStorage.getItem("id"));

  }


  ngOnInit(): void {
  }

}
