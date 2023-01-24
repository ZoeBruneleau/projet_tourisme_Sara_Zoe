import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AccountComponent} from "./account/account.component";
import {AccountEditComponent} from "./account/account-edit/account-edit.component";
import {MapComponent} from "./map/map.component";

const routes: Routes = [
  { path : 'home', component: HomeComponent },
  { path : 'account', component: AccountComponent },
  { path : 'account_edit', component: AccountEditComponent },
  { path : 'map', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
