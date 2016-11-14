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
var role_1 = require('./role');
var RoleDetailComponent = (function () {
    function RoleDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof role_1.RoleComponent !== 'undefined' && role_1.RoleComponent) === 'function' && _a) || Object)
    ], RoleDetailComponent.prototype, "role", void 0);
    RoleDetailComponent = __decorate([
        core_1.Component({
            selector: 'role-detail',
            template: "\n  <div *ngIf=\"role\">\n    <h3>Details</h3>\n    <form class=\"ui form\">\n      <div class=\"field\">\n      <label>ID: </label>\n      <input type=\"text\" [(ngModel)]=\"role.id\" name=\"id\" placeholder=\"ID\"/>\n      </div>\n      <div class=\"field\">\n      <label>Name: </label>\n      <input type=\"text\" [(ngModel)]=\"role.name\" name=\"name\" placeholder=\"Name\"/>\n      </div>\n    </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], RoleDetailComponent);
    return RoleDetailComponent;
    var _a;
}());
exports.RoleDetailComponent = RoleDetailComponent;
//# sourceMappingURL=role-detail.component.js.map