import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { RoleDetailComponent } from './role-detail.component';
import { RoleComponent } from './role.component';
import { RoleService } from './role.service';
import { SigninComponent } from './signin.component';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        RoleDetailComponent,
        RoleComponent,
        SigninComponent
    ],
    providers: [
        RoleService
    ],
    bootstrap: [
        AppComponent
    ]
})


export class AppModule { }
