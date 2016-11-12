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
var RoleComponent = (function () {
    function RoleComponent() {
    }
    return RoleComponent;
}());
exports.RoleComponent = RoleComponent;
var ROLES = [
    { id: 1, name: 'Admin', icon: 'spy', desc: 'Description admin here', status: 'green' },
    { id: 2, name: 'User', icon: 'student', desc: 'Description user here', status: 'green' },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Alumni Tracker';
        this.roles = ROLES;
    }
    AppComponent.prototype.onSelect = function (role) {
        console.log("Click", role);
        this.selectedRole = role;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>{{title}}</h1>\n  <h3>Roles</h3>\n  <div class=\"ui cards\">\n    <div *ngFor=\"let role of roles\" (click)=onSelect(role) class=\"ui {{role.status}} link card\">\n      <div class=\"content\">\n        <div class=\"header\">\n        <h2 class=\"ui header\">\n          <i class=\"{{role.icon}} icon\"></i>\n          <div class=\"content\">\n            {{role.name}}\n          </div>\n        </h2>\n        </div>\n        <div class=\"description\">\n        {{role.desc}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"selectedRole\">\n    <h3>Details</h3>\n    <div>\n      <label>ID: </label>{{selectedRole.id}}\n    </div>\n    <div>\n      <label>Name: </label>{{selectedRole.name}}\n    </div>\n    <div>\n      <label>Icon: </label>{{selectedRole.icon}}\n    </div>\n    <div>\n      <label>Desc: </label>{{selectedRole.desc}}\n    </div>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map