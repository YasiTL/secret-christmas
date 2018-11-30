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
import { Problem2Component } from './sidenav/problem2/problem2.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainContentComponent,
    LoginComponent,
    Problem2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
