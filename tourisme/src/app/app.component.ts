import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServiceService} from "./service/service.service";
import {Tourisme} from "./Tourisme";
import {lastValueFrom, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tourisme';
  public  toto?: Observable<Tourisme[]>;

  constructor(private service: ServiceService) { }

  async ngOnInit() {
    this.toto = this.service.getConfig();
    console.log(this.toto);
  }
}
