import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { RoleDetailComponent } from './role-detail.component';
import { RoleComponent } from './role.component';
import { RoleService } from './role.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        RoleDetailComponent,
        RoleComponent
    ],
    providers: [
        RoleService
    ],
    bootstrap: [
        AppComponent
    ]
})


export class AppModule { }
