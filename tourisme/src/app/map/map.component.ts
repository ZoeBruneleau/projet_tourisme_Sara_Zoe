import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {HttpClient} from "@angular/common/http";
import {Tourisme} from "../Tourisme";
import {CtaComponent} from "../home/cta/cta.component";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private http:HttpClient) {
  }
  ngOnInit(): void {

    const myfrugalmap = L.map('frugalmap', {
        center: [46.227638, 2.213749],
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
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });

    this.http.get('getTourism').subscribe((data: any) => {
      data.forEach((lieu: Tourisme) => {
        L.marker([lieu.latitude, lieu.longitude], {icon: DefaultIcon})
          .bindPopup('<a title="' + lieu.name + '" href=""> <img style="width: 100px" src="https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" /></a><br> <b>'
            + lieu.name  +' </b> <br> <i>' +  lieu.comment + "</i><br /><a href='" + lieu.wiki + "' >Wikipédia</a>"
        ).addTo(myfrugalmap);
      });
    });
  }

}
