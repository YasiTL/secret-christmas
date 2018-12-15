import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule, MatButtonToggleModule, MatIconModule, MatListModule,
  MatSidenavModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainContentComponent } from './sidenav/main-content/main-content.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material';
import { Problem1Component } from './sidenav/problem1/problem1.component';
import { Problem2Component } from './sidenav/problem2/problem2.component';
import { SubmitFieldComponent } from './submit-field/submit-field.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainContentComponent,
    LoginComponent,
    Problem1Component,
    Problem2Component,
    SubmitFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
