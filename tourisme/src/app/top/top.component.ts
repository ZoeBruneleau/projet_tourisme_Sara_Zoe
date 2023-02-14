import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service/service.service";
import {Tourisme} from "../mock/Tourisme";
import {LieuNote} from "../mock/lieuNote";


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  public top?: Tourisme[];
  public list_lieu?: Tourisme[];
  public list_lieuNote: LieuNote[] = []
  private notes: Map<number, number>;

  constructor(private service: ServiceService) {
    this.notes = new Map<number, number>();
    this.service.getAllLieu()
      .subscribe((res) => {
        this.list_lieu = res;
        this.map();
      });
  }

  ngOnInit() {

  }

  map() {

    this.list_lieu?.forEach(value => {

      this.service.getCommentByLieuId(value.id)
        .subscribe((res) => {
          let nb = res.length;
          let s = 0;
          res.forEach((value) => {
            if (value.note != undefined)
              s = s + value.note;
          });

          if (s > 0) {
            let l = new LieuNote();
            l.id = value.id;
            l.name = value.name;
            l.ville = value.ville;
            l.image = value.image;
            l.comment = value.comment;
            l.note = s / nb;
            l.tab = Array(l.note).fill(0);
            this.list_lieuNote.push(l);
          }
          this.list_lieuNote.sort((a, b) => b.note - a.note);

        });

    });

  };


}
