import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServiceService} from "./service/service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tourisme';
  public toto : any ;

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.toto = this.service.getConfig();
    console.log(this.toto);
  }

}
