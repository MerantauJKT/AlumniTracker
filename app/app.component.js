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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n            <div class=\"ui secondary  menu\">\n                <a class=\"item\" routerLink=\"/dashboard\">\n                    Home\n                </a>\n                <a class=\"item\">\n                    menu1\n                </a>\n                <a class=\"item\">\n                    menu2\n                </a>\n                <div class=\"right menu\">\n                    <div class=\"item\">\n                    <div class=\"ui icon input\">\n                        <input type=\"text\" placeholder=\"Search...\">\n                        <i class=\"search link icon\"></i>\n                    </div>\n                    </div>\n                    <div class=\"item\">\n                        <div class=\"ui primary button\" routerLink=\"/signup\">Sign up</div>\n                    </div>\n                </div>\n            </div>\n            <router-outlet></router-outlet>\n            "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map