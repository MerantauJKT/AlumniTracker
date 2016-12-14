import { Component } from '@angular/core';
import { User } from './user';
const USERS: User[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
@Component({
  selector: 'my-app',
  template: `
    
<div class="ui grid"> 
<div class="sixteen wide column">
<div class="ui secondary pointing menu">
  <a class=" item">
    Home
  </a>
  <a class="active item">
    User Management
  </a>
  <div class="right menu">
    <a class="ui item">
      Logout
    </a>
  </div>
</div>
<div class="ui segment">

  <div class="ui grid">
  <div class="sixteen wide column"><h1>{{title}}</h1>
  <div class="ui three cards">
    <div *ngFor="let user of users" class="fluid link card" (click)="onSelect(user)">
          <div class="content">
            <div class="header">
              <h2 class="ui header">
                <i class="user icon"></i>
                <div class="content">
                  {{user.name}}
                </div>
              </h2>
            </div>
          </div>
    </div>
    </div>
  <div class="sixteen wide column"><my-user-detail [user]="selectedUser"></my-user-detail></div>
</div>
</div>
</div>
</div>
</div>
`
})
export class AppComponent {
  title = 'Tour of Users';
  users = USERS;
  selectedUser: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
