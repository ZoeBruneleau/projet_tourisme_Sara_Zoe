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

  public toto!: User;
  public mails! : string[];
  public user :User[] =[];
  public userTempConnected! : User[];
  public userConnected! : User;
  public userPairs! : [{mail: string,mdp : string }];


  constructor( private serviceUser:UserService) {
    this.serviceUser.getUserConfig()
      .subscribe((user) => {
        this.user= user;
  })


  }


   /*
    getUserByMail(m:string) {

      this.serviceUser.getUserConfig()
        .subscribe((res) => {
          this.userTempConnected = res.filter((todo: User)=> todo.mail === m);
        });

      return this.userTempConnected[0];
    }*/


  ngOnInit() {

    }

  /*async ngOnInit() {
    this.toto = await lastValueFrom(this.serviceUser.getUserConfig());
  }*/

  public loginForm = new FormGroup({
    mail: new FormControl('', Validators.required),
    mdp: new FormControl('', Validators.required)
  })

  public id? : number ;
  public mdp : string = "";
  public mail : string = "";
  public isConnected : boolean = false;
  private currlogmail= "";

  public login() {

    alert(this.loginForm.get('mail'));
  /*let currUser = this.userTempConnected[0];
   if (currUser.mail === this.loginForm.get('mail')?.value as string &&  currUser.mdp === this.loginForm.get('mdp')?.value as string ){
      alert("Connexion réussie");
      this.isConnected = true;
      this.id = this.toto.id;
      //rediriger compte clint + info CC ou id

    } else {
      alert("mdp ou adresse mail incorecte(s)");
      // erreur pas le bon mdp ou mail
    }*/


  }
}
