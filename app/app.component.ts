import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
            <div class="ui secondary  menu">
                <a class="item" routerLink="/dashboard">
                    Home
                </a>
                <a class="item">
                    menu1
                </a>
                <a class="item">
                    menu2
                </a>
                <div class="right menu">
                    <div class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search...">
                        <i class="search link icon"></i>
                    </div>
                    </div>
                    <div class="item">
                        <div class="ui primary button" routerLink="/signup">Sign up</div>
                    </div>
                </div>
            </div>
            <router-outlet></router-outlet>
            `

})
export class AppComponent {
  title = 'Tour of Heroes';
}
