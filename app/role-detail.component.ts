import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Role } from './role';
import { RoleService } from './role.service';

@Component({
  moduleId: module.id,
  selector: 'role-detail',
  templateUrl: 'role-detail.component.html'
})
export class RoleDetailComponent implements OnInit {

  constructor(
    private roleService: RoleService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void{
    this.route.params
      .switchMap((params: Params) => this.roleService.getRole(+params['id']))
      .subscribe(role => this.role = role);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void {
    this.roleService.update(this.role);
  }

  @Input()
  role: Role;

  @Input()
  action: string;
}
