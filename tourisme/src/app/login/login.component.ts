import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../User";
import {lastValueFrom} from "rxjs";
import {ServiceService} from "../service/service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public toto!: User;

  constructor(private router: Router, private serviceUser:UserService) { }

  async ngOnInit() {
    this.toto = await lastValueFrom(this.serviceUser.getUserConfig());
  }

  public loginForm = new FormGroup({
    mail: new FormControl('', Validators.required),
    mdp: new FormControl('', Validators.required)
  })

  public id : string = "";
  public mdp : string = "";
  public mail : string = "";
  public isConnected : boolean = false;

  public login() {
    if (this.toto.mail === this.loginForm.get('mail')?.value as string ){
      alert("OK");
      this.isConnected = true;

    } else {
      alert("not ok");
      // erreur pas le bon mdp ou mail
    }
  }
}
