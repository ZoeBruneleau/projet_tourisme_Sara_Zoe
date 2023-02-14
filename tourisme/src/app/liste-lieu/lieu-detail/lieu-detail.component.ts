import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../../service/service.service";
import {Tourisme} from "../../mock/Tourisme";
import { Comment } from 'src/app/mock/comment';
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-lieu-detail',
  templateUrl: './lieu-detail.component.html',
  styleUrls: ['./lieu-detail.component.scss']
})
export class LieuDetailComponent implements OnInit {

  private idLieu: string | null = ""
  private idUser:number =0;
  public lieu: Tourisme | undefined
  public list_comment: Comment[] =[]
  private tab_number_etoile:number[]= []
  public tab_moyenne_note:number[]= []
  public like:boolean=false
  constructor(private router: Router, private route: ActivatedRoute, private service: ServiceService, private userservice: UserService) {
    this.idLieu = this.route.snapshot.paramMap.get('id');
    this.idUser = Number(localStorage.getItem("id"));
    this.get_lieu()
    this.getComments()
    this.is_in_liste()
  }

  ngOnInit() {

  }

  private get_lieu():void{
    this.service.getLieuId(this.idLieu)
      .subscribe((res) => {
        this.lieu = res;
      });
  }
  private getComments():void{
    this.service.getComment()
      .subscribe((res) => {
        for(let comment in res){
          if(res[comment].id_lieu ==Number(this.idLieu)){
            this.list_comment.push(res[comment])
            res[comment].tab_note = Array(res[comment].note).fill(0);
            this.define_note(res[comment].note)
          }
        }
      });
  }

  private define_note(tab_note: number) :void{
    this.tab_number_etoile.push(tab_note)
    let somme = 0
    for (let i = 0; i < this.tab_number_etoile.length; i++) {
      somme += this.tab_number_etoile[i]
    }
    let moyenne = somme / this.tab_number_etoile.length
    this.tab_moyenne_note = Array(Math.round(moyenne)).fill(0);
  }
  private is_in_liste() :void {
    let list
    this.userservice.getList(String(this.idUser)).subscribe((res) => {
      list = res;
      list.forEach((value: { idL: any; }) =>{
        console.log(value.idL, Number(this.idLieu))
        if (value.idL==Number(this.idLieu)){
          this.like=true
        }
      });
    });
  }

  public changeListeEnvie():void{
    if(this.idUser == 0){
      this.router.navigate(['/login/' ])
    }
    else{
      if(this.userservice.not_in_liste(this.idUser, Number(this.idLieu))){
        this.userservice.addLieuList(this.idUser, Number(this.idLieu)).subscribe(data => {
          console.log(data)
        })
        this.like=true
      }

    }
  }
  public addComment():void{
    if(this.idUser != 0){
      this.router.navigate(['/add_comment/'+this.idLieu ])
    }
    else{
      this.router.navigate(['/login/' ])
    }
  }
}
