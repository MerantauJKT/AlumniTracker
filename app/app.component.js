"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var USERS = [
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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Users';
        this.users = USERS;
    }
    AppComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    \n<div class=\"ui grid\"> \n<div class=\"sixteen wide column\">\n<div class=\"ui secondary pointing menu\">\n  <a class=\" item\">\n    Home\n  </a>\n  <a class=\"active item\">\n    User Management\n  </a>\n  <div class=\"right menu\">\n    <a class=\"ui item\">\n      Logout\n    </a>\n  </div>\n</div>\n<div class=\"ui segment\">\n\n  <div class=\"ui grid\">\n  <div class=\"sixteen wide column\"><h1>{{title}}</h1>\n  <div class=\"ui three cards\">\n    <div *ngFor=\"let user of users\" class=\"fluid link card\" (click)=\"onSelect(user)\">\n          <div class=\"content\">\n            <div class=\"header\">\n              <h2 class=\"ui header\">\n                <i class=\"user icon\"></i>\n                <div class=\"content\">\n                  {{user.name}}\n                </div>\n              </h2>\n            </div>\n          </div>\n    </div>\n    </div>\n  <div class=\"sixteen wide column\"><my-user-detail [user]=\"selectedUser\"></my-user-detail></div>\n</div>\n</div>\n</div>\n</div>\n</div>\n"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map