import {NgxPaginationModule} from "ngx-pagination";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SubcribeComponent } from './subcribe/subcribe.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FeatureSectionComponent } from './home/feature-section/feature-section.component';
import { CtaComponent } from './home/cta/cta.component';
import { AccountComponent } from './account/account.component';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { MapComponent } from './map/map.component';
import { ListeLieuComponent } from './liste-lieu/liste-lieu.component';
import { LieuDetailComponent } from './liste-lieu/lieu-detail/lieu-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SubcribeComponent,
    LoginComponent,
    FeatureSectionComponent,
    CtaComponent,
    AccountComponent,
    AccountEditComponent,
    MapComponent,
    ListeLieuComponent,
    LieuDetailComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LeafletModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
