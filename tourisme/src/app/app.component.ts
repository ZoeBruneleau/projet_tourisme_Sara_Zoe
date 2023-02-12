import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServiceService} from "./service/service.service";
import {Tourisme} from "./mock/Tourisme";
import {lastValueFrom, Observable} from "rxjs";
import {UserService} from "./service/user.service";
import {AuthService} from "./service/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})

export class AppComponent {
  title:string = "Tourisme";


constructor(public serviceUser:UserService) {
}
}
