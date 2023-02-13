import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../../service/service.service";
import {Tourisme} from "../../mock/Tourisme";
import {lastValueFrom} from "rxjs";
import { Comment } from 'src/app/mock/comment';
import {UserService} from "../../service/user.service";

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
  like:boolean=false
  private idUser:number =0;
  constructor(private router: Router, private route: ActivatedRoute, private service: ServiceService, private userservice: UserService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.idUser = Number(localStorage.getItem("id"));
    this.userservice.getUserList(String(this.idUser))
    this.get_lieu(this.id)
    this.getComments(this.id)
    this.is_in_liste(localStorage.getItem("id"), this.id)
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
  changeListeEnvie(idLieu: number){
    let idUser = Number(localStorage.getItem("id"));
    if(idUser == 0){
      this.router.navigate(['/login/' ])
    }
    else{
      if(this.userservice.not_in_liste(idUser, Number(idLieu))){
        this.userservice.addLieuList(idUser, Number(idLieu)).subscribe(data => {
          console.log(data)
        })
        this.like=true
      }
      else {
        console.log("in liste")
      }
    }
  }

  private is_in_liste(id: string | null, idLieu: string | null) {
    let list
    this.userservice.getList(id).subscribe((res) => {
      list = res;
      list.forEach((value: { idL: any; }) =>{
        if (value.idL==Number(idLieu)){
          this.like=true
        }
      });
    });
  }

  public addComment(idLieu: number){
    if(this.idUser != 0){
      this.router.navigate(['/add_comment/'+idLieu ])
    }
    else{
      this.router.navigate(['/login/' ])
    }
  }
}
