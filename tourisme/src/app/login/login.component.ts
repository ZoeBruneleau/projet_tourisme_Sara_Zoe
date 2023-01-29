import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../User";
import {lastValueFrom, Observable} from "rxjs";
import {ServiceService} from "../service/service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user :User[] =[];
  public userListConnected! : User[];
  public currUser! : User;
  public isConnected : boolean = false;

  public id? : number ;
  public mdp : string = "";
  public mail : string = "";


  constructor( private serviceUser:UserService) {
    this.serviceUser.getUserConfig()
      .subscribe((user) => {
        this.user= user;
      })
  }

  ngOnInit() {

    }

  public loginForm = new FormGroup({
    mail: new FormControl('', Validators.required),
    mdp: new FormControl('', Validators.required)
  })

  public login() {
    let mail = this.loginForm.get('mail')?.value as string
    console.log(mail)
    this.serviceUser.getUserConfig()
      .subscribe((res) => {
        this.userListConnected = res.filter((todo: User) => todo.mail == this.loginForm.get('mail')?.value);
      });
    if ( this.userListConnected[0] != undefined ){
      this.currUser = this.userListConnected[0];
      this.checkMail(mail);
    }
    else{
      alert("adresse mail non reconnue");
    }

  }

  public checkMail(m:string) {
      if (this.currUser.mail === this.loginForm.get('mail')?.value as string && this.currUser.mdp === this.loginForm.get('mdp')?.value as string) {
        alert("Connexion réussie");
        this.isConnected = true;
        //rediriger compte clint + info CC ou id

      } else {
        alert("mdp ou adresse mail incorecte(s)");
        // erreur pas le bon mdp ou mail
      }

  }


}
