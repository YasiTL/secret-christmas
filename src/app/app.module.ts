import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {} from 'node_modules/angular-split-flap';



import {
  MatButtonModule, MatButtonToggleModule, MatIconModule, MatListModule,
  MatSidenavModule
} from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainContentComponent } from './sidenav/main-content/main-content.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainContentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // ngSplitFlap,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
