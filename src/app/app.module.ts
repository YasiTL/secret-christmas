import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import Backendless from 'backendless';
import {environment} from '../environments/environment';

import {
  MatButtonModule, MatButtonToggleModule, MatIconModule, MatListModule,
  MatSidenavModule, MatFormFieldModule, MatInputModule, MatSnackBarModule
} from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainContentComponent } from './sidenav/main-content/main-content.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material';
import { Problem1Component } from './sidenav/problem1/problem1.component';
import { Problem2Component } from './sidenav/problem2/problem2.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Problem3Component} from './sidenav/problem3/problem3.component';
import {Problem4Component} from './sidenav/problem4/problem4.component';
import {Problem5Component} from './sidenav/problem5/problem5.component';
import {Problem6Component} from './sidenav/problem6/problem6.component';
import {SubmitFieldComponent} from './submit-field/submit-field.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainContentComponent,
    LoginComponent,
    Problem1Component,
    Problem2Component,
    Problem3Component,
    Problem4Component,
    Problem5Component,
    Problem6Component,
    SubmitFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
