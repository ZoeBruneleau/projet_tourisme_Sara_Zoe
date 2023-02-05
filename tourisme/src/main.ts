import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Server } from 'miragejs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

new Server({
  routes() {
    this.get('getUser', () => require("./app/user.json"));
    this.get('/getTourism', () => require('./app/mock.tourisme.json'));
    this.post('/getTourism', () => require('./app/mock.tourisme.json'));
    this.get('http://localhost:3000/lieu', () => require('./app/mock.tourisme.json'));
    this.post('http://localhost:3000/lieu', () => require('./app/mock.tourisme.json'));




  }
})

