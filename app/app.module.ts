import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { SignupComponent } from './signup.component';
import { ValidationService } from './validation.service';
import { ControlMessagesComponent } from './control-messages.component';

import { RouterModule }   from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  ReactiveFormsModule,
                  RouterModule.forRoot([
                                          {
                                            path: '',
                                            redirectTo: '/dashboard',
                                            pathMatch: 'full'
                                          },
                                          {
                                            path: 'heroes',
                                            component: HeroesComponent
                                          },
                                          {
                                            path: 'dashboard',
                                            component: DashboardComponent
                                          },
                                          {
                                            path: 'signup',
                                            component: SignupComponent
                                          },

                                        ])
                  
                 ],
  declarations: [ AppComponent,
                  HeroDetailComponent,
                  HeroesComponent,
                  DashboardComponent,
                  SignupComponent,
                  ControlMessagesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ValidationService]
})
export class AppModule { }
