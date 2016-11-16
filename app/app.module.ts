import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RoleDetailComponent } from './role-detail.component';
import { RoleComponent } from './role.component';
import { RoleService } from './role.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([{
            path: 'roles',
            component: RoleComponent
        },{
          path: 'dashboard',
          component: DashboardComponent
        },{
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
        }])
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
