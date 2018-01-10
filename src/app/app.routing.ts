import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { ContentComponent } from "./content/content.component";
import { LoggerComponent } from "./logger/logger.component";
import { LoginComponent } from "./login/login.component";

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: ContentComponent },
    { path: 'log', component: LoggerComponent },
];

export const Routing = RouterModule.forRoot(APP_ROUTES);