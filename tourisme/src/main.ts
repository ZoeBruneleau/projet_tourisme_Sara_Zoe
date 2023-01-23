import { enableProdMode } from '@angular/core';
import { Server } from 'miragejs';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

new Server({
  routes(){
    this.passthrough();
    this.get('getTourism', ()=> require("./app/mock.tourisme.json"))
  }
})

