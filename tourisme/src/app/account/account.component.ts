import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../User";
import {Tourisme} from "../Tourisme";
import {AuthService} from "../service/auth.service";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public currUser : User | undefined ;
  public user :User[] =[];
  public list : Tourisme[] | undefined = [];

  public id?: string | null ="";

  constructor(private router : Router,private route: ActivatedRoute,private service:UserService,private authService:AuthService) {

    if (!(this.service.currUser == undefined || this.service.currUser ==null)){
      this.id = this.service.currUser.id.toString();
      this.currUser = this.service.currUser ;
    }
   else{
      this.id = this.route.snapshot.paramMap.get('id') ;
      this.getCurrUserById(this.id);
    }
    this.service.getUserList(this.id);



  }

  getCurrUserById(id:string | null){
    this.service.getUserById(id)
      .subscribe((res) => {
        this.currUser = res;
      });

  }

  logout(){
    this.authService.logout();
    alert("Vous êtes déconnecté");
    this.router.navigate(['/home']);

  }


  ngOnInit(): void {
  }

}
