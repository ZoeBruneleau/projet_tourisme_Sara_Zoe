import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../User";
import {lastValueFrom, Observable} from "rxjs";
import {ServiceService} from "../service/service.service";
import {ApiService} from "../service/api.service";
import {AuthInterceptor} from "../auth.interceptor";
import {HttpClient} from "@angular/common/http";

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


  constructor( private router: Router ,private serviceUser:UserService,private apiService : ApiService,    private http: HttpClient
  ) {
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
  /*
    let mail = this.loginForm.get('mail')?.value as string
    this.serviceUser.getUserConfig()
      .subscribe((res) => {
        this.userListConnected = res.filter((todo: User) => todo.mail == this.loginForm.get('mail')?.value);
      });
    if ( this.userListConnected[0] != undefined ){
      this.currUser = this.userListConnected[0];
      this.checkMail(mail);
      this.serviceUser.currUser = this.currUser;

      this.serviceUser
        .login(this.loginForm.get('mail')?.value as string, this.loginForm.get('mdp')?.value as string)
        .subscribe((response) => {
          this.router.navigate(['/account']);
        });
    }
    else{
      alert("adresse mail non reconnue");
    } */

    this.http.post('http://localhost:8000/api/login', this.loginForm.getRawValue(), {withCredentials: true})
      .subscribe((res: any) => {
        AuthInterceptor.accessToken = res.token;

        this.router.navigate(['/account']);
        console.log(res.token);
      });


  }

  public checkMail(m:string) {
    if (this.currUser.mail === this.loginForm.get('mail')?.value as string && this.currUser.mdp === this.loginForm.get('mdp')?.value as string) {
      alert("Connexion réussie");
      this.isConnected = true;
      this.router.navigate(['/account']);

    } else {
      alert("mdp ou adresse mail incorecte(s)");
      // erreur pas le bon mdp ou mail
    }
  }


}

//https://blog.angular-university.io/angular-jwt-authentication/
