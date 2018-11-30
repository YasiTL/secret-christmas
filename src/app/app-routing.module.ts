import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SidenavComponent} from './sidenav/sidenav.component';
import {LoginComponent} from './login/login.component';
import {MainContentComponent} from './sidenav/main-content/main-content.component';
import {AppComponent} from './app.component';
import {Problem1Component} from './sidenav/problem1/problem1.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainContentComponent},
  {path: 'problem1', component: Problem1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
