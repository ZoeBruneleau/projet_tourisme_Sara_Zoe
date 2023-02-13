import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {User} from "../mock/User";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private id: number = 0;
  public is_connect: boolean = false

  constructor(private serviceUser: UserService) {
  }

  ngOnInit(): void {
    this.id = Number(localStorage.getItem("id"));
    if (this.id != 0) {
      this.is_connect = true
    }
  }

}
