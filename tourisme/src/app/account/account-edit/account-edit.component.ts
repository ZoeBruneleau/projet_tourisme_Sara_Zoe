import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {User} from "../../mock/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent implements OnInit {

  public user: User | undefined;
  private id: number = 0;

  constructor(private service: UserService, private router:Router) {
    this.service.getUserById(localStorage.getItem("id"))
      .subscribe((res) => {
        this.user = res;
        this.id = res.id;
      });

  }

  ngOnInit(): void {
  }

  public editForm = new FormGroup({
    name: new FormControl(Validators.required),
    firstName: new FormControl('', Validators.required),
    ville: new FormControl('', Validators.required),
    CP: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email]),

  })

  public save() : void{

    this.service.edit(this.editForm.getRawValue(), this.id);


  }

}
