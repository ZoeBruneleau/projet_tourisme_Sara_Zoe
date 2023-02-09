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

    if (!(this.service.currUser == undefined || this.service.currUser ==null)){
      this.currUser = this.service.currUser ;
    }
   else{
      this.id = this.route.snapshot.paramMap.get('id') ;
      this.getCurrUserById(this.id);
    }


  }

  getCurrUserById(id:string | null){
    this.service.getUserConfig()
      .subscribe((res) => {
        this.userListConnected = res.filter((todo: User) => todo.id == Number(id));
      });

  }


  ngOnInit(): void {
  }

}
