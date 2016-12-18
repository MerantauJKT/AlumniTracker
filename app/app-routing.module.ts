import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleDetailComponent } from './role-detail.component';
import { RoleComponent } from './role.component';
import { DashboardComponent } from './dashboard.component';
import { SigninComponent } from './signin.component';

const routes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch:'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'roles', component: RoleComponent },
  { path: 'detail/:id', component: RoleDetailComponent },
  { path: 'sign', component: SigninComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
