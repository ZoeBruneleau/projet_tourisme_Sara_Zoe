import { Component, OnInit } from '@angular/core';
import {Tourisme} from "../Tourisme";
import {ServiceService} from "../service/service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-liste-lieu',
  templateUrl: './liste-lieu.component.html',
  styleUrls: ['./liste-lieu.component.scss']
})
export class ListeLieuComponent implements OnInit {

  public copie_list_lieu?:Tourisme[];
  public list_lieu?:Tourisme[];

  public searchForm = new FormGroup({
    search : new FormControl(''),
  })
  constructor(private service: ServiceService) {
    this.service.getConfig()
      .subscribe((res) => {
        this.list_lieu = res;
        this.copie_list_lieu = res;
      });
  }

  ngOnInit() {
  }
  search(){
    let newlist = []
    let search = this.searchForm.value.search
    let list_lieu;
    if (search != '') {
      let lieu: Tourisme = {comment: "", id: 0, image: "", latitude: 0, longitude: 0, name: "", ville: "", wiki: ""};
      for (let number in this.copie_list_lieu) {
        lieu = this.copie_list_lieu[Number(number)]
        if (lieu.name.toLowerCase().includes(String(search).toLowerCase()) || lieu.ville.toLowerCase().includes(String(search).toLowerCase())) {
          newlist.push(lieu)
        }
      }
      this.list_lieu = newlist
    }
    else{
      this.list_lieu = this.copie_list_lieu
    }
  }
}
