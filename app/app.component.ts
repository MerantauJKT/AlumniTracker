import { Component } from '@angular/core';

export class RoleComponent {
  id: number;
  name: string;
}

const ROLES: RoleComponent[] = [
  { id: 1, name: 'Admin'},
  { id: 2, name: 'User'},
];

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h3>List Roles</h3>
  <ul>
  <li *ngFor="let role of roles" (click)="onSelect(role)">{{role.id}} - {{role.name}}</li>
  </ul>
  `
})

export class AppComponent {
  title = 'Alumni Tracker';
  roles = ROLES;

  onSelect(role: RoleComponent): void {
    console.log("Click", role);
  }
}
