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
import {AddCommentComponent} from "./liste-lieu/lieu-detail/add-comment/add-comment.component";
import {TopComponent} from "./top/top.component";
import {NotFoundComponent} from "./not-found/not-found.component";



const routes: Routes = [
  { path : 'home', component: HomeComponent },
  { path : 'account/:id', component: AccountComponent },
  { path : 'account', component: AccountComponent },
  { path : 'account_edit', component: AccountEditComponent },
  { path : 'map', component: MapComponent },
  { path : 'list_lieu', component: ListeLieuComponent },
  { path : 'lieu/:id', component: LieuDetailComponent },
  { path : 'subcribe', component: SubcribeComponent },
  { path : 'login', component: LoginComponent },
  { path : 'add_comment/:id', component: AddCommentComponent },
  { path : 'top5', component: TopComponent },
  { path : '', redirectTo :'home',pathMatch:"full"},
  { path : '**', component:NotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
