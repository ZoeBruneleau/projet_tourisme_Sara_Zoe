import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServiceService} from "./service/service.service";
import {lastValueFrom} from "rxjs";
import {Tourisme} from "./Tourisme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tourisme';
  public  toto?: Tourisme;

  constructor(private service: ServiceService) { }

  async ngOnInit() {
    this.toto = await lastValueFrom(this.service.getConfig());
    console.log(this.toto);
  }

}
