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
  public top?:Tourisme[];
  public list_lieu?:Tourisme[];
  private comment?:Comment[];

  constructor(private service: ServiceService) {

    this.service.getAllLieu()
      .subscribe((res) => {

        this.list_lieu = res.sort(function (a, b) {
          return (b.note -  a.note)
      })

  });

  //this.list_lieu?.forEach(l : Tourisme )
  }

  ngOnInit(){



  }


}
