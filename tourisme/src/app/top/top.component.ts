import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service/service.service";
import {Tourisme} from "../Tourisme";
import {Comment} from "../comment";


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  public copie_top?:Tourisme[];
  public list_lieu?:Tourisme[];
  private comment?:Comment[];

  constructor(private service: ServiceService) {

    this.service.getAllLieu()
      .subscribe((res) => {

        this.list_lieu = res;
      });

    this.service.getComment()
      .subscribe((res) => {

        this.comment = res;
      });
  }

  ngOnInit(): void {
    /*this.list_lieu?.sort(function (a, b) {
      return a.*/

  }


}
