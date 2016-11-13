import { Component, Input } from '@angular/core';
import { RoleComponent } from './role';

@Component({
  selector: 'role-detail',
  template: `
  <div *ngIf="role">
    <h3>Details</h3>
    <form class="ui form">
      <div class="field">
      <label>ID: </label>
      <input type="text" [(ngModel)]="role.id" name="id" placeholder="ID"/>
      </div>
      <div class="field">
      <label>Name: </label>
      <input type="text" [(ngModel)]="role.name" name="name" placeholder="Name"/>
      </div>
    </form>
  </div>
  `
})
export class RoleDetailComponent {
  @Input()
  role: RoleComponent;
}
