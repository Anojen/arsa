import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatSidenavModule, MatSelectModule, MatListModule, MatExpansionModule, MatTooltipModule } from '@angular/material';

import { Routing } from "./app.routing";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { TemperaturComponent } from './temperatur/temperatur.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoggerComponent } from './logger/logger.component';
import { LoginComponent } from './login/login.component';

export const firebaseconfig = {
    apiKey: "AIzaSyCumLrg4OazcB0wH6zJvEBvH20EpgV4uzI",
    authDomain: "homematic-40e75.firebaseapp.com",
    databaseURL: "https://homematic-40e75.firebaseio.com",
    projectId: "homematic-40e75",
    storageBucket: "homematic-40e75.appspot.com",
    messagingSenderId: "793155536633"
}

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ContentComponent,
        TemperaturComponent,
        LoggerComponent,
        LoginComponent
    ],
    imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        BrowserModule,
        AngularFireModule.initializeApp(firebaseconfig, 'angular-auth-firebase'),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        Routing,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [TemperaturComponent]
})
export class AppModule { }
