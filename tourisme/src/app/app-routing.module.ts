import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SubcribeComponent} from "./subcribe/subcribe.component";
import {TestSubComponent} from "./test-sub/test-sub.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path : 'home', component: HomeComponent },
  { path : 'subcribe', component: SubcribeComponent },
  { path : 'test', component: TestSubComponent },
  { path : 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
