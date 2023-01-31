import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../User";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public currUser : User | undefined ;
  public userListConnected : User[]=[];

  constructor(private serviceUser:UserService) {
    this.currUser = this.serviceUser.currUser ;
  }


  ngOnInit(): void {
  }

}
