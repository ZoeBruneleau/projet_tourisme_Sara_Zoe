import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service/service.service";
import {Tourisme} from "../Tourisme";
import {Comment} from "../comment";
import {LieuNote} from "../lieuNote";


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  public top?:Tourisme[];
  public list_lieu?:Tourisme[];
  private comment?:Comment[];
  tab_number_etoile:number[]= []
  tab_moyenne_note:number[]= []
  list_comment: Comment[] =[]
  list_lieuNote: LieuNote[] =[]
  list_lieuNote2: LieuNote[] =[]

  notes : Map<number,number>;

  constructor(private service: ServiceService) {
   /*
    this.service.getAllLieu()
      .subscribe((res) => {

        this.list_lieu = res.sort(function (a, b) {
          return (b.note -  a.note)
      }

  });*/

    this.notes = new Map<number,number>();

    this.service.getAllLieu()
      .subscribe((res) => {
        this.list_lieu = res;
        this.map();
      });



  }

  ngOnInit(){

  }

  map() {

    this.list_lieu?.forEach(value => {

     this.service.getCommentByLieuId(value.id)
        .subscribe((res) => {
          let nb = res.length;
          let s = 0;
          res.forEach( (value) =>{
            if (value.note != undefined)
            s = s +  value.note;
          });

          if (s > 0){
            let l = new LieuNote();
            l.id = value.id;
            l.name = value.name;
            l.note = s/nb;
            this.list_lieuNote.push(l);
        }
        });



    });

  };


}
