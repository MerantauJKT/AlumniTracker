import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Signup } from './signup';
import { ValidationService } from './validation.service';

@Component({
  selector: 'my-signup',
  template: `
            
            <div class="ui one column centered grid">
              <div class="column eight wide form-holder">
                <h2 class="ui center aligned header form-head">Sign Up</h2>
                <div class="ui form stacked secondary segment" [formGroup]="form">
                  <h4 class="ui dividing header">User Information</h4>
                  <div class="field">
                    <label>Nama</label>
                    <div class="two fields">
                      <div class="field">
                        <input type="text" formControlName="namaDepan" placeholder="Nama Depan">
                        <control-messages [control]="form.controls.namaDepan"></control-messages>
                      </div>
                      <div class="field">
                        <input type="text" formControlName="namaBelakang" placeholder="Nama Belakang">
                        <control-messages [control]="form.controls.namaBelakang"></control-messages>
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <div class="two fields">
                      <div class="field">
                        <label>Email</label>
                        <div class="ui left icon input">
                          <i class="mail icon"></i>
                          <input type="email" name="email" formControlName="email" placeholder="E-mail address">
                          <control-messages [control]="form.controls.email"></control-messages>
                        </div>
                      </div>
                      <div class="field">
                        <label>Tanggal Lahir</label>
                        <div class="ui left icon input">
                          <i class="calendar icon"></i>
                          <input type="date" name="tanggalLahir" formControlName="tanggalLahir" placeholder="Tanggal Lahir">
                          <control-messages [control]="form.controls.tanggalLahir"></control-messages>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="field">
                    <div class="fields">
                      <div class="six wide field">
                        <label>Angkatan</label>
                        <div class="ui left icon input">
                          <i class="student icon"></i>
                          <input type="text" name="angkatan" formControlName="angkatan" placeholder="2010" (keypress)="preventKeyStrokes($event)" >
                          <control-messages [control]="form.controls.angkatan"></control-messages>
                        </div>
                      </div>
                      <div class="ten wide field">
                        <label>No BP</label>
                        <div class="ui left icon input">
                          <i class="user icon"></i>
                          <input type="text" name="noBp" formControlName="noBp" placeholder="No BP" (keypress)="preventKeyStrokes($event)" >
                          <control-messages [control]="form.controls.noBp"></control-messages>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 class="ui dividing header">User Account</h4>
                  <div class="field">
                    <div class="ui left icon input">
                      <i class="user icon"></i>
                      <input type="text" formControlName="username" placeholder="username">
                      <control-messages [control]="form.controls.username"></control-messages>
                    </div>
                  </div>
                  <div class="field">
                    <div class="ui left icon input">
                      <i class="lock icon"></i>
                      <input type="password" formControlName="password" placeholder="password">
                      <control-messages [control]="form.controls.password"></control-messages>
                    </div>
                  </div>
                  <div class="field">
                    <input type="submit" [disabled]="!form.valid" (click)="onSubmitModelBased()" value="sign up" class="ui button large fluid green">
                  </div>
                </div>
                <div class="ui message">
                  Have an account? <a href="http://s.codepen.io/voltron2112/debug/PqrEPM?">Login</a>
                </div>
              </div>
            </div>
            
            `,
    styles:[`.form-head {
                font-size: 30px;
                letter-spacing: 2px;
                text-transform: uppercase;
                color: #fff;
                text-shadow: 0 0 30px #000;
                margin: 15px auto 30px auto;
              }`],
})
export class SignupComponent {
    form: FormGroup;
    
    username = new FormControl("", Validators.required);
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            "namaDepan": this.username,
            "namaBelakang":["", Validators.required],
            "username":["", Validators.required],
            "password":["", [Validators.required, ValidationService.passwordValidator]],
            "email":["", [Validators.required, ValidationService.emailValidator]],
            "tanggalLahir":["", Validators.required],
            "angkatan":["", [Validators.required, Validators.maxLength(4), Validators.minLength(4)]],
            "noBp":["", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
        });
    }    
    preventKeyStrokes(event) {
               
            event = event || window.event;
            var key = event.keyCode || event.which;
            key = String.fromCharCode(key);
            var reg = new RegExp('^\\d+$');
            if (!reg.test(key)) {
                return false;
            }

      }
    // email : string;
    // username : string;
    // password : string;
    // namaDepan : string;
    // namaBelakang : string;
    // tanggalLahir : string;
    // angkatan : string;
    // noBp : string;
    onSubmitModelBased() {
        console.log("model-based form submitted");
        console.log(this.form);
    }
 }
