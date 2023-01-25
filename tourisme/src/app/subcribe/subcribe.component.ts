import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-subcribe',
  templateUrl: './subcribe.component.html',
  styleUrls: ['./subcribe.component.scss']
})
export class SubcribeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public subcribeForm = new FormGroup({
    prenom : new FormControl('',Validators.required),
    nom : new FormControl('', Validators.required),
    ville : new FormControl('', Validators.required),
    cp : new FormControl('', Validators.required),
    mdp : new FormControl('', Validators.required),
    mdp2 : new FormControl('', Validators.required),
    age: new FormControl(''),
    mail : new FormControl('',[Validators.required, Validators.email]),
    cgu : new FormControl(''),
  })


  private mdp : string = "";
  private mdp2 : string = "";

}
