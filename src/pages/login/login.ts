import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToRegisterpage(){
  }

}