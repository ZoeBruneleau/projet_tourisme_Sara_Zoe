import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../../service/service.service";
import {Tourisme} from "../../mock/Tourisme";
import {lastValueFrom} from "rxjs";
import { Comment } from 'src/app/mock/comment';

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
    this.get_lieu(this.id)
    this.getComments(this.id)


  }
  ngOnInit() {
  }

  get_lieu(id: string | null){
    this.service.getLieuId(id)
      .subscribe((res) => {
        this.lieu = res;
      });
  }

  getComments(id: string | null){
    this.service.getComment()
      .subscribe((res) => {
        for(let comment in res){
          if(res[comment].id_lieu ==Number(id)){
            this.list_comment.push(res[comment])
            res[comment].tab_note = Array(res[comment].note).fill(0);
            this.define_note(res[comment].note)
          }
        }
      });
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
