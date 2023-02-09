import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../../service/service.service";
import {Tourisme} from "../../Tourisme";
import {lastValueFrom} from "rxjs";
import { Comment } from 'src/app/comment';

@Component({
  selector: 'app-lieu-detail',
  templateUrl: './lieu-detail.component.html',
  styleUrls: ['./lieu-detail.component.scss']
})
export class LieuDetailComponent implements OnInit {

  public id?: string | null = ""
  public lieu_list: Tourisme[] | undefined
  lieu: Tourisme | undefined
  list_comment: Comment[] =[]
  number: number[] | undefined

  constructor(private route: ActivatedRoute, private service: ServiceService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getLieuId(this.id)
      .subscribe((res) => {
        this.lieu = res;
    });

    this.service.getComment()
      .subscribe((res) => {
        for(let comment in res){
          if(res[comment].id_lieu ==Number(this.id)){
            this.list_comment.push(res[comment])
            res[comment].tab_note = Array(res[comment].note).fill(0);
          }
        }
      });
  }
  ngOnInit() {
  }

}
