import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../User";
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


  constructor( private router: Router ,private serviceUser:UserService,    private http: HttpClient
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
    let m = this.loginForm.get('mail')?.value;
    let mdp = this.loginForm.get('mdp')?.value as string
    this.serviceUser.getUserConfig()
      .subscribe((res) => {
        this.userListConnected = res.filter((todo: User) => todo.mail == m);
        if (this.userListConnected != undefined) {
          this.currUser = this.userListConnected[0];
          if (this.currUser == undefined){
            alert("mdp ou adresse mail incorecte(s)");
          }
          if ( this.currUser.mail === m && this.currUser.mdp === mdp) {
         /*
           this.http.post('/login', this.loginForm.getRawValue(), {withCredentials: true})
              .subscribe((res: any) => {

                alert("Connexion réussie");
                this.router.navigate(['/account']);
              }); */
            this.serviceUser.login(this.loginForm.get('mdp')?.value as string,mdp);


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


