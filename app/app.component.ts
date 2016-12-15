import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

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
`,
 providers: [UserService]
})


export class AppComponent implements OnInit {
  title = 'Tour of Users';
  users: Users[];
  selectedUser: User;

  constructor(private userService: UserService) { }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }
  ngOnInit(): void {
    this.getUsers();
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
