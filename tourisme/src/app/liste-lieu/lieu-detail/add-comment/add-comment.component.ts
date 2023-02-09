import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../../../service/service.service";
import {Tourisme} from "../../../Tourisme";
import { Comment } from "../../../comment";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  public id?: string | null =""
  lieu: Tourisme | undefined

  comments: Comment[] | undefined;
  com = new Comment();

  public commentForm = new FormGroup({
    pseudo : new FormControl('',Validators.required),
    note : new FormControl('', ),
    comment : new FormControl('', ),
  })
  constructor(private route: ActivatedRoute, private service: ServiceService) {
    this.id = this.route.snapshot.paramMap.get('id');
    //this.service.addTodo(this.commentForm.value)


  }
  ngOnInit(): void {
    this.refresh();

  }

  refresh() {
    this.service.getComment()
      .subscribe((res) => {
        console.log(res)
      });
  }


    post(){
    /*
    this.service.addTodo(this.commentForm.value)
     */

    this.service.addTodo(this.com).subscribe(data => {
      console.log(data)
      this.refresh();
    })

  }

}
