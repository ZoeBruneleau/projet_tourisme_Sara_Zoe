import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../../../service/service.service";
import {Tourisme} from "../../../mock/Tourisme";
import { Comment } from "../../../mock/comment";
import {FormControl, FormGroup, MaxValidator, Validators} from "@angular/forms";
import {UserService} from "../../../service/user.service";

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

  constructor(private route: ActivatedRoute, private service: ServiceService,private userservice: UserService, private router :Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userservice.getUserById(localStorage.getItem("id")).subscribe((res) => {
      this.com = res;
    });
  }
  ngOnInit(): void {
    this.refresh();

  }
  public commentForm = new FormGroup({
    pseudo : new FormControl('', Validators.required),
    note : new FormControl('', [Validators.required, Validators.max(5)]),
    comment : new FormControl('', Validators.required),
    id_lieu:new FormControl(this.route.snapshot.paramMap.get('id')),
  })
  refresh() {
    this.service.getComment()
      .subscribe((res) => {
        console.log(res)
      });
  }


    post(){
    this.service.addComment(this.commentForm.value).subscribe(data => {
      console.log(data)
      alert("Le commentaire a été ajouté");
      this.refresh();
      this.router.navigate(["/lieu/"+this.id]);
    })

  }

}
