import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServiceService} from "./service/service.service";
import {Tourisme} from "./Tourisme";
import {lastValueFrom, Observable} from "rxjs";
import {UserService} from "./service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = "Tourisme";


constructor(public serviceUser:UserService) {
}
}
