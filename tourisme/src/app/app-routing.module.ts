import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SubcribeComponent} from "./subcribe/subcribe.component";
import {LoginComponent} from "./login/login.component";
import {AccountComponent} from "./account/account.component";
import {AccountEditComponent} from "./account/account-edit/account-edit.component";
import {MapComponent} from "./map/map.component";
import {ListeLieuComponent} from "./liste-lieu/liste-lieu.component";
import {LieuDetailComponent} from "./liste-lieu/lieu-detail/lieu-detail.component";


const routes: Routes = [
  { path : 'home', component: HomeComponent },
  { path : 'account', component: AccountComponent },
  { path : 'account_edit', component: AccountEditComponent },
  { path : 'map', component: MapComponent },
  { path : 'list_lieu', component: ListeLieuComponent },
  { path : 'lieu/:id', component: LieuDetailComponent },
    { path : 'subcribe', component: SubcribeComponent },
    { path : 'login', component: LoginComponent },

  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
