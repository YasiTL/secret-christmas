import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SidenavComponent} from './sidenav/sidenav.component';
import {LoginComponent} from './login/login.component';
import {MainContentComponent} from './sidenav/main-content/main-content.component';
import {AppComponent} from './app.component';
import {Problem1Component} from './sidenav/problem1/problem1.component';
import {Problem2Component} from './sidenav/problem2/problem2.component';
import {Problem3Component} from './sidenav/problem3/problem3.component';
import {Problem4Component} from './sidenav/problem4/problem4.component';
import {Problem5Component} from './sidenav/problem5/problem5.component';
import {Problem6Component} from './sidenav/problem6/problem6.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainContentComponent},
  {path: 'problem1', component: Problem1Component},
  {path: 'problem2', component: Problem2Component},
  {path: 'problem3', component: Problem3Component},
  {path: 'problem4', component: Problem4Component},
  {path: 'problem5', component: Problem5Component},
  {path: 'problem6', component: Problem6Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
