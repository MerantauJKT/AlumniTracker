import { Component } from '@angular/core';
import { RoleComponent } from './role';

const ROLES: RoleComponent[] = [
    { id: 1, name: 'Admin', icon: 'spy', desc: 'Description admin here', status: 'green' },
    { id: 2, name: 'User', icon: 'student', desc: 'Description user here', status: 'green' },
];

@Component({
    selector: 'my-app',
    template: `
  <h1>{{title}}</h1>
  <h3>Roles</h3>
  <div class="ui cards">
    <div *ngFor="let role of roles" (click)=onSelect(role) class="ui {{role.status}} link card">
      <div class="content">
        <div class="header">
        <h2 class="ui header">
          <i class="{{role.icon}} icon"></i>
          <div class="content">
            {{role.name}}
          </div>
        </h2>
        </div>
        <div class="description">
        {{role.desc}}
        </div>
      </div>
    </div>
  </div>
  <role-detail [role]="selectedRole"></role-detail>
  `
})

export class AppComponent {
    title = 'Alumni Tracker';
    roles = ROLES;
    selectedRole: RoleComponent;

    onSelect(role: RoleComponent): void {
        console.log("Click", role);
        this.selectedRole = role;
    }
}
