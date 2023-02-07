import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../../../service/service.service";
import {Tourisme} from "../../../Tourisme";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  public id?: string | null =""
  lieu: Tourisme | undefined

  public commentForm = new FormGroup({
    pseudo : new FormControl('',Validators.required),
    note : new FormControl('', ),
    comment : new FormControl('', ),
  })
  constructor(private route: ActivatedRoute, private service: ServiceService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getConfig()
      .subscribe((res) => {
        for (let lieu in res) {
          if (res[lieu].id == Number(this.id)) {
            this.lieu = res[lieu]
          }
        }
      });
  }
  ngOnInit(): void {
  }

  post(){
    this.service.addTodo(this.commentForm.value)

  }

}