import { Component, OnInit } from '@angular/core';

import { Role } from './role';
import { RoleService } from './role.service';

@Component({
    selector: 'my-role',
    template: `

  <div class="ui two column grid">
    <div class="ten wide column">
    <h3>List Roles</h3>
      <div class="ui three cards">
        <div class="fluid card">
        <div class="content">
          <div class="header">
            
          </div>
          <div class="description">
          </div>
        </div>
        <div class="ui bottom basic blue attached button">
          <i class="add icon"></i>
          New Role
        </div>
        </div>
        <div *ngFor="let role of roles" class="fluid link card">
          <div class="content">
            <div class="header">
              <h2 class="ui header">
                <i class="{{role.icon}} icon"></i>
                <div class="content">
                  {{role.name}}
                </div>
              </h2>
            </div>
          </div>
          <div class="extra content">
            <a class="right floated">
              <i class="trash outline icon"></i>
            </a>
            <a (click)=onSelect(role) class="right floated">
              <i class="edit icon"></i>
            </a>
            <a class="right floated">
              <i class="search icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="six wide column">
      <role-detail [role]="selectedRole"></role-detail>
    </div>
  </div>
  `
})

export class RoleComponent implements OnInit{
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
