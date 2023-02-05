import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../../service/service.service";
import {Tourisme} from "../../Tourisme";
import {lastValueFrom} from "rxjs";
@Component({
  selector: 'app-lieu-detail',
  templateUrl: './lieu-detail.component.html',
  styleUrls: ['./lieu-detail.component.scss']
})
export class LieuDetailComponent implements OnInit {

  public id?: string | null =""
  public list_lieu: Tourisme[] =[];
  public list_unique: Tourisme[] =[];


  lieu: Tourisme | undefined

  newlieu: Tourisme = new Tourisme(800, 'test', 0, 0, 'comment')
  constructor(private route: ActivatedRoute, private service: ServiceService) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.service.getAllLieu()
      .subscribe((res) => {
        this.list_unique = res.filter((todo: Tourisme)=> todo.id === Number(this.id));
      });



    this.service.addLieu(this.newlieu)
      .subscribe((res) => {
      console.log(res);
      });


  }
  ngOnInit() {
    AddLieu(this.newlieu);
  }

}
function AddLieu(newlieu: Tourisme) {
  var fs = require('file-system');
  var data = fetch("assets/js/add.js");
  var myObject = JSON.parse(data.toString());

  // Adding the new data to our object
  myObject.push(newlieu);

  // Writing to our JSON file
  var newData2 = JSON.stringify(myObject);
  fs.writeFile("assets/js/add.js", newData2, (err: any) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  });
}

