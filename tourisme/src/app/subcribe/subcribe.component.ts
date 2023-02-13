import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-subcribe',
  templateUrl: './subcribe.component.html',
  styleUrls: ['./subcribe.component.scss']
})
export class SubcribeComponent implements OnInit {

  public mdp: string = "";
  public mdp2: string = "";

  constructor(private router: Router, private service: UserService) {
  }

  ngOnInit(): void {
  }

  public subcribeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    ville: new FormControl('', Validators.required),
    CP: new FormControl('', Validators.required),
    mdp: new FormControl('', Validators.required),
    mdp2: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email]),
    cgu: new FormControl(''),
  })


  save() {

    if (this.mdp != this.mdp2) {
      alert("Veuillez entrez des mot de passe identiques");
    } else {
      this.service.subcribe(this.subcribeForm.getRawValue())
    }
  }

}
