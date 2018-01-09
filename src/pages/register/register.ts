import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
}