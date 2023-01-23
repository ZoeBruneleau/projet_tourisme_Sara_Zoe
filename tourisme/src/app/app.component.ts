import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServiceService} from "./service/service.service";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tourisme';
  public toto: any = {ville: 'toto'};

  constructor(private service:ServiceService) { }

  async ngOnInit() {
    this.toto = await lastValueFrom(this.service.getConfig());
    console.log(this.toto);
  }

}
