import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../User";
import {Tourisme} from "../Tourisme";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public currUser : User | undefined ;
  public user :User[] =[];
  public userListConnected! : User[];

  public id?: string | null ="";

  constructor(private route: ActivatedRoute,private service:UserService) {
    this.id = this.route.snapshot.paramMap.get('id') ;
    this.service.getUserConfig()
      .subscribe((res) => {
        this.userListConnected = res.filter((todo: User)=> todo.id === Number(this.id));
        this.currUser=this.userListConnected[0]
      });

  }


  ngOnInit(): void {
  }

}
