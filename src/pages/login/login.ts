import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToRegisterpage(){
    window.location.href = "register.register.html";
  }

}