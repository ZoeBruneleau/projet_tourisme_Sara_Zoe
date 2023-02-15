import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../../../service/service.service";
import { Comment } from "../../../mock/comment";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  private id?: string | null =""
  public com = new Comment();
  public commentForm = new FormGroup({
    pseudo : new FormControl('', Validators.required),
    note : new FormControl('', [Validators.required, Validators.max(5), Validators.min(0)]),
    comment : new FormControl('', Validators.required),
    id_lieu:new FormControl(this.route.snapshot.paramMap.get('id')),
  })

  constructor(private route: ActivatedRoute, private service: ServiceService,private userservice: UserService, private router :Router) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userservice.getUserById(localStorage.getItem("id")).subscribe((res) => {
      this.com.pseudo = res.pseudo;
    });
  }
  ngOnInit(): void {
  }



    public post():void{
    this.service.addComment(this.commentForm.value).subscribe(data => {
      console.log(data)
      alert("Le commentaire a été ajouté");
      this.router.navigate(["/lieu/"+this.id]);
    })

  }

}
