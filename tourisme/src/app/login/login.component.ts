import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../User";

import {AuthService} from "../service/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public user :User[] =[];
  public userListConnected! : User[];
  public currUser! : User;


  public id? : number ;
  public mdp : string = "";
  public mail : string = "";


  constructor( private router: Router ,private serviceUser:UserService, private authService:AuthService ) {
    this.serviceUser.getUserConfig()
      .subscribe((user) => {
        this.user= user;
      })


  }

  ngOnInit() {

  }

  userLogin() {

    this.authService.userLogin(this.loginForm.value)
      .subscribe(
        (value) => {
          if(value){
            this.checkmail();
            console.log(localStorage.getItem('id'));
          }else{
            alert('failed');
          }
        },
        (error)=>{
          alert('failed error');
        }
      );
  }
  public loginForm = new FormGroup({
    mail: new FormControl('', Validators.required),
    mdp: new FormControl('', Validators.required)
  })

  public checkmail() {
    let m = this.loginForm.get('mail')?.value;
    let mdp = this.loginForm.get('mdp')?.value as string
    this.serviceUser.getUserConfig()
      .subscribe((res) => {
        this.userListConnected = res.filter((todo: User) => todo.mail == m);
        if (this.userListConnected != undefined) {
          this.currUser = this.userListConnected[0];
          if (this.currUser.mail === m && this.currUser.mdp === mdp) {
            alert("Connexion réussie");

            this.router.navigate(['/account/' ]);

          } else {
            alert("mdp ou adresse mail incorecte(s)");
            // erreur pas le bon mdp ou mail
          }
          this.serviceUser.currUser = this.currUser;
        } else {
          alert("adresse mail non reconnue");
        }
      });
  }




}

//https://blog.angular-university.io/angular-jwt-authentication/
