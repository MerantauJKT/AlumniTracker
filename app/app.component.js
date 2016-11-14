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
var core_1 = require('@angular/core');
var role_service_1 = require('./role.service');
var AppComponent = (function () {
    function AppComponent(roleService) {
        this.roleService = roleService;
        this.title = 'Alumni Tracker';
    }
    AppComponent.prototype.onSelect = function (role) {
        console.log("Click", role);
        this.selectedRole = role;
    };
    AppComponent.prototype.getRoles = function () {
        var _this = this;
        this.roleService.getRoles().then(function (roles) { return _this.roles = roles; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1>\n  <h3>Roles</h3>\n  <div class=\"ui cards\">\n    <div *ngFor=\"let role of roles\" (click)=onSelect(role) class=\"ui {{role.status}} link card\">\n      <div class=\"content\">\n        <div class=\"header\">\n        <h2 class=\"ui header\">\n          <i class=\"{{role.icon}} icon\"></i>\n          <div class=\"content\">\n            {{role.name}}\n          </div>\n        </h2>\n        </div>\n        <div class=\"description\">\n        {{role.desc}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <role-detail [role]=\"selectedRole\"></role-detail>\n  ",
            providers: [role_service_1.RoleService]
        }), 
        __metadata('design:paramtypes', [role_service_1.RoleService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map