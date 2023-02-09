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

  //newlieu: Tourisme = {comment: "comment", image: "image", latitude: 0, longitude: 0, name: "testlieu", wiki: "", id:800}
  constructor(private route: ActivatedRoute, private service: ServiceService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getLieu()
      .subscribe((res) => {
        for(let lieu in res){
          if(res[lieu].id ==Number(this.id)){
            this.lieu=res[lieu]
          }
        }
      });

   // let id = this.service.addTodo(this.newlieu)
    //console.log("id")
    //console.log(id)
  }
  ngOnInit() {
  }

}
