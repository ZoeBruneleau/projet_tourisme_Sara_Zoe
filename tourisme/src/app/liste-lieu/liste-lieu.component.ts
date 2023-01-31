import { Component, OnInit } from '@angular/core';
import {Tourisme} from "../Tourisme";
import {ServiceService} from "../service/service.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-liste-lieu',
  templateUrl: './liste-lieu.component.html',
  styleUrls: ['./liste-lieu.component.scss']
})
export class ListeLieuComponent implements OnInit {

  public lieu:Tourisme[]= [];
  public iterableLieu:string[]= [];
  constructor(private service: ServiceService, private http: HttpClient) {
    this.service.getAllLieu()
      .subscribe((res) => {
        this.lieu = res;
      });


  }
  ngOnInit() {
  }
}
