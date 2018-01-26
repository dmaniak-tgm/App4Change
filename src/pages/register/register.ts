import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { SidemenuPage } from "../sidemenu/sidemenu";

@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {
    private role: any = null;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        this.role = this.navParams.get("selectedRole");
    }

    signedIn() {
        this.navCtrl.setRoot(SidemenuPage);
    }
}