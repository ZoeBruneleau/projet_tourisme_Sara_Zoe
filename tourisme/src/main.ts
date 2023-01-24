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
    this.passthrough();
    this.get('/getTourism', () => require('./app/mock.tourisme.json'));
  }
})
