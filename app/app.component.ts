import { Component, OnInit } from '@angular/core';

import { Role } from './role';
import { RoleService } from './role.service';

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
  `,
  providers: [RoleService]
})

export class AppComponent implements OnInit{
    title = 'Alumni Tracker';
    roles : Role[];
    selectedRole: Role;

    constructor(private roleService: RoleService) {}

    onSelect(role: Role): void {
        console.log("Click", role);
        this.selectedRole = role;
    }

    getRoles(): void {
      this.roleService.getRoles().then(roles => this.roles = roles);
    }

    ngOnInit(): void{
      this.getRoles();
    }
}
