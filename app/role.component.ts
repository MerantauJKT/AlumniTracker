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
        <div (click)=onAdd() class="ui bottom basic blue attached button">
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
            <a (click)=onPencil(role) class="right floated">
              <i class="edit icon"></i>
            </a>
            <a (click)=onLup(role) class="right floated">
              <i class="search icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="six wide column">
      <role-detail [role]="selectedRole" [action]="actionType"></role-detail>
      <div *ngIf="this.actionType == 'Create'">
        <div class="ui column grid">
          <div class="four wide column">
            <h1 class="ui center aligned icon header">
              <i class="{{name.value || 'plus'}} icon"></i>
            </h1>
          </div>
          <div class="twelve wide column">
            <form class="ui form">
              <div class="field">
              <label>Id: </label>
                <input type="text" #id name="id" placeholder="ID"/>
              </div>
              <div class="field">
              <label>Name: </label>
              <input type="text" #name name="name" placeholder="Name"/>
              </div>
              <div class="field">
              <label>Desc: </label>
              <textarea #desc name="desc"></textarea>
              </div>
            </form>
            <button class="ui blue button" (click)="create(id.value, name.value, desc.value)">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})

export class RoleComponent implements OnInit{
    roles : Role[];
    selectedRole: Role;
    actionType: string;

    constructor(private roleService: RoleService) {}

    onLup(role: Role): void {
        console.log("Click", role);
        this.selectedRole = role;
        this.actionType = "Preview";
    }

    onPencil(role: Role): void {
      this.selectedRole = role;
      this.actionType = "Edit";
    }

    onTrash(role: Role): void {
      this.selectedRole = role;
      this.actionType = "Delete";
    }

    onAdd(): void{
      this.actionType = "Create";
    }

    getRoles(): void {
      this.roleService.getRoles().then(roles => this.roles = roles);
    }

    ngOnInit(): void{
      this.getRoles();
    }

    create(id: number, name: string, desc: string): void{
      console.log(this.roles);
      //this.roles.push({id: id, name: name, desc: desc, icon: 'plus', status:'green'});
      this.roleService.create({id: id, name: name, desc: desc, icon: 'plus', status:'green'})
        .then(role => {
          this.roles.push({id: id, name: name, desc: desc, icon: 'plus', status:'green'});
          this.selectedRole = null;
        })
    }
}
