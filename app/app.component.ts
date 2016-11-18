import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="ui column grid">
    <div class="row">
      <div class="sixteen wide column">
        <div class="ui top fixed menu">
          <div class="header item">
          </div>
          <a class="item" routerLink="/dashboard">
          Dashboard
          </a>
          <a class="item">
            Alumni
          </a>
          <a class="item" routerLink="/roles">
            Role Management
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="sixteen wide column">
        <router-outlet></router-outlet>
      </div>
    </div>
    </div>
  `
})

export class AppComponent {
    title = 'Alumni Tracker';
}
