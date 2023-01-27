import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../../service/service.service";
import {Tourisme} from "../../Tourisme";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-lieu-detail',
  templateUrl: './lieu-detail.component.html',
  styleUrls: ['./lieu-detail.component.scss']
})
export class LieuDetailComponent implements OnInit {

  public id?: string | null =""
  public lieu_list: Tourisme[] | undefined
  lieu: Tourisme | undefined
  constructor(private route: ActivatedRoute, private service: ServiceService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getConfig()
      .subscribe((res) => {
        this.lieu_list = res.filter((todo: Tourisme)=> todo.id === Number(this.id));
      });

  }
  ngOnInit() {
  }

}
