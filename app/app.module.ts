import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RoleDetailComponent } from './role-detail.component';

@NgModule({
  imports:[
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    RoleDetailComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
