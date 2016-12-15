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
var user_service_1 = require("./user.service");
var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.title = 'Tour of Users';
    }
    AppComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (users) { return _this.users = users; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    AppComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    \n<div class=\"ui grid\"> \n<div class=\"sixteen wide column\">\n<div class=\"ui secondary pointing menu\">\n  <a class=\" item\">\n    Home\n  </a>\n  <a class=\"active item\">\n    User Management\n  </a>\n  <div class=\"right menu\">\n    <a class=\"ui item\">\n      Logout\n    </a>\n  </div>\n</div>\n<div class=\"ui segment\">\n\n  <div class=\"ui grid\">\n  <div class=\"sixteen wide column\"><h1>{{title}}</h1>\n  <div class=\"ui three cards\">\n    <div *ngFor=\"let user of users\" class=\"fluid link card\" (click)=\"onSelect(user)\">\n          <div class=\"content\">\n            <div class=\"header\">\n              <h2 class=\"ui header\">\n                <i class=\"user icon\"></i>\n                <div class=\"content\">\n                  {{user.name}}\n                </div>\n              </h2>\n            </div>\n          </div>\n    </div>\n    </div>\n  <div class=\"sixteen wide column\"><my-user-detail [user]=\"selectedUser\"></my-user-detail></div>\n</div>\n</div>\n</div>\n</div>\n</div>\n",
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map