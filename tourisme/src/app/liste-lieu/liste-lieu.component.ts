import { Component, OnInit } from '@angular/core';
import {Tourisme} from "../Tourisme";
import {ServiceService} from "../service/service.service";

@Component({
  selector: 'app-liste-lieu',
  templateUrl: './liste-lieu.component.html',
  styleUrls: ['./liste-lieu.component.scss']
})
export class ListeLieuComponent implements OnInit {

  public lieu?:Tourisme[];

  constructor(private service: ServiceService) {
    this.service.getConfig()
      .subscribe((res) => {
        this.lieu = res;
      });

  }
  ngOnInit() {
  }
}
