import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {HttpClient} from "@angular/common/http";
import {Tourisme} from "../Tourisme";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private http:HttpClient) {
  }
  ngOnInit(): void {
    this.defineMap()
  }

  defineMap(){

    const myfrugalmap = L.map('frugalmap', {
        center: [46.227638, 2.213749], // France
        zoom: 6,
      }
    );

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Carte de la France'
    }).addTo(myfrugalmap);

    let DefaultIcon = L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png',
    });


    this.http.get('/lieu').subscribe((data: any) => {
      data.forEach((lieu: Tourisme) => {
        L.marker([lieu.latitude, lieu.longitude], {icon: DefaultIcon})
          .bindPopup('<a title="' + lieu.name + '" href="/lieu/'+lieu.id+'/"> <img style="width: 250px" src="'+lieu.image+'" /></a><br> <b>'
            + lieu.name  +' </b> <br> <i>' +  lieu.ville + "</i><br /><a href='" + lieu.wiki + "' >Wikipédia</a>"
          ).addTo(myfrugalmap);
      });
    });
  }

}
