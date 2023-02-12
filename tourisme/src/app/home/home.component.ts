import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service/service.service";
import {User} from "../mock/User";
import {lastValueFrom, Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }



}
