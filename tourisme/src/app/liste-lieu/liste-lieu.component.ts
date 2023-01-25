import { Component, OnInit } from '@angular/core';
import {Tourisme} from "../Tourisme";
import {ServiceService} from "../service/service.service";
import {lastValueFrom, Observable} from "rxjs";

@Component({
  selector: 'app-liste-lieu',
  templateUrl: './liste-lieu.component.html',
  styleUrls: ['./liste-lieu.component.scss']
})
export class ListeLieuComponent implements OnInit {

  public lieu?:Observable<Tourisme[]>;

  constructor(private service: ServiceService) { }
  p: number = 1;
  async ngOnInit() {
    this.lieu = this.service.getConfig();
    console.log(this.lieu);
  }

}
