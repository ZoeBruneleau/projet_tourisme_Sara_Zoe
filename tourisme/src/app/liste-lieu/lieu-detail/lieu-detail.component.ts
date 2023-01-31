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
  public list_lieu: Tourisme[] =[];
  public list_unique: Tourisme[] =[];


  lieu: Tourisme | undefined

  newlieu: Tourisme = {id: 800, name: "testlieu", latitude: 0, longitude: 0, comment: "commentaire", image:"image", wiki: ""}

  constructor(private route: ActivatedRoute, private service: ServiceService) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.service.getAllLieu()
      .subscribe((res) => {
        this.list_unique = res.filter((todo: Tourisme)=> todo.id === Number(this.id));
      });

    this.service.addLieu(this.newlieu)
      .subscribe((res) => {
      console.log(res);
      });


  }
  ngOnInit() {
  }

}
