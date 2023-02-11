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
  lieu: Tourisme | undefined
  list_comment: Comment[] =[]

  tab_number_etoile:number[]= []
  tab_moyenne_note:number[]= []
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
            this.define_note(res[comment].note)
          }
        }
      });
  }
  ngOnInit() {
  }

  define_note(tab_note: number) {
    this.tab_number_etoile.push(tab_note)
    let somme = 0
    for (let i = 0; i < this.tab_number_etoile.length; i++) {
      somme += this.tab_number_etoile[i]
    }
    let moyenne = somme / this.tab_number_etoile.length
    this.tab_moyenne_note = Array(Math.round(moyenne)).fill(0);

  }
}
