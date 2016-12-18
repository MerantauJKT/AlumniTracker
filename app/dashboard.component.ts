import { Component, OnInit } from '@angular/core';

import { Role } from './role';
import { RoleService } from './role.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
})

export class DashboardComponent implements OnInit{
  roles: Role[] = [];

  constructor(private roleService: RoleService) {}

  ngOnInit(): void{
    this.roleService.getRoles().then(roles => this.roles = roles.slice(0,1));
  }
}
