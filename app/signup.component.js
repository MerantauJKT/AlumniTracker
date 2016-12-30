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
var forms_1 = require("@angular/forms");
var validation_service_1 = require("./validation.service");
var SignupComponent = (function () {
    function SignupComponent(fb) {
        this.username = new forms_1.FormControl("", forms_1.Validators.required);
        this.form = fb.group({
            "namaDepan": this.username,
            "namaBelakang": ["", forms_1.Validators.required],
            "username": ["", forms_1.Validators.required],
            "password": ["", [forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator]],
            "email": ["", [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
            "tanggalLahir": ["", forms_1.Validators.required],
            "angkatan": ["", [forms_1.Validators.required, forms_1.Validators.maxLength(4), forms_1.Validators.minLength(4)]],
            "noBp": ["", [forms_1.Validators.required, forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10)]],
        });
    }
    SignupComponent.prototype.preventKeyStrokes = function (event) {
        event = event || window.event;
        var key = event.keyCode || event.which;
        key = String.fromCharCode(key);
        var reg = new RegExp('^\\d+$');
        if (!reg.test(key)) {
            return false;
        }
    };
    // email : string;
    // username : string;
    // password : string;
    // namaDepan : string;
    // namaBelakang : string;
    // tanggalLahir : string;
    // angkatan : string;
    // noBp : string;
    SignupComponent.prototype.onSubmitModelBased = function () {
        console.log("model-based form submitted");
        console.log(this.form);
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        selector: 'my-signup',
        template: "\n            \n            <div class=\"ui one column centered grid\">\n              <div class=\"column eight wide form-holder\">\n                <h2 class=\"ui center aligned header form-head\">Sign Up</h2>\n                <div class=\"ui form stacked secondary segment\" [formGroup]=\"form\">\n                  <h4 class=\"ui dividing header\">User Information</h4>\n                  <div class=\"field\">\n                    <label>Nama</label>\n                    <div class=\"two fields\">\n                      <div class=\"field\">\n                        <input type=\"text\" formControlName=\"namaDepan\" placeholder=\"Nama Depan\">\n                        <control-messages [control]=\"form.controls.namaDepan\"></control-messages>\n                      </div>\n                      <div class=\"field\">\n                        <input type=\"text\" formControlName=\"namaBelakang\" placeholder=\"Nama Belakang\">\n                        <control-messages [control]=\"form.controls.namaBelakang\"></control-messages>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"field\">\n                    <div class=\"two fields\">\n                      <div class=\"field\">\n                        <label>Email</label>\n                        <div class=\"ui left icon input\">\n                          <i class=\"mail icon\"></i>\n                          <input type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"E-mail address\">\n                          <control-messages [control]=\"form.controls.email\"></control-messages>\n                        </div>\n                      </div>\n                      <div class=\"field\">\n                        <label>Tanggal Lahir</label>\n                        <div class=\"ui left icon input\">\n                          <i class=\"calendar icon\"></i>\n                          <input type=\"date\" name=\"tanggalLahir\" formControlName=\"tanggalLahir\" placeholder=\"Tanggal Lahir\">\n                          <control-messages [control]=\"form.controls.tanggalLahir\"></control-messages>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"field\">\n                    <div class=\"fields\">\n                      <div class=\"six wide field\">\n                        <label>Angkatan</label>\n                        <div class=\"ui left icon input\">\n                          <i class=\"student icon\"></i>\n                          <input type=\"text\" name=\"angkatan\" formControlName=\"angkatan\" placeholder=\"2010\" (keypress)=\"preventKeyStrokes($event)\" >\n                          <control-messages [control]=\"form.controls.angkatan\"></control-messages>\n                        </div>\n                      </div>\n                      <div class=\"ten wide field\">\n                        <label>No BP</label>\n                        <div class=\"ui left icon input\">\n                          <i class=\"user icon\"></i>\n                          <input type=\"text\" name=\"noBp\" formControlName=\"noBp\" placeholder=\"No BP\" (keypress)=\"preventKeyStrokes($event)\" >\n                          <control-messages [control]=\"form.controls.noBp\"></control-messages>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <h4 class=\"ui dividing header\">User Account</h4>\n                  <div class=\"field\">\n                    <div class=\"ui left icon input\">\n                      <i class=\"user icon\"></i>\n                      <input type=\"text\" formControlName=\"username\" placeholder=\"username\">\n                      <control-messages [control]=\"form.controls.username\"></control-messages>\n                    </div>\n                  </div>\n                  <div class=\"field\">\n                    <div class=\"ui left icon input\">\n                      <i class=\"lock icon\"></i>\n                      <input type=\"password\" formControlName=\"password\" placeholder=\"password\">\n                      <control-messages [control]=\"form.controls.password\"></control-messages>\n                    </div>\n                  </div>\n                  <div class=\"field\">\n                    <input type=\"submit\" [disabled]=\"!form.valid\" (click)=\"onSubmitModelBased()\" value=\"sign up\" class=\"ui button large fluid green\">\n                  </div>\n                </div>\n                <div class=\"ui message\">\n                  Have an account? <a href=\"http://s.codepen.io/voltron2112/debug/PqrEPM?\">Login</a>\n                </div>\n              </div>\n            </div>\n            \n            ",
        styles: [".form-head {\n                font-size: 30px;\n                letter-spacing: 2px;\n                text-transform: uppercase;\n                color: #fff;\n                text-shadow: 0 0 30px #000;\n                margin: 15px auto 30px auto;\n              }"],
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], SignupComponent);
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map