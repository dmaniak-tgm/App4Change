import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { RegisterPage } from '../register/register';
import { Http } from '@angular/http';
import { TestPage } from "../test/test";
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  
})
export class LoginPage {
  private regPage: any = RegisterPage;
  data: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private toastCtrl: ToastController) {
    this.data.username = "";
    this.data.password = "";
    this.data.response = "";
  }

  private showToast(message : string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2500,
      position: "bottom"
    });
    toast.present();
  }

  login(): void {
    let link = "http://localhost/PHP/login.php";

    let myData = JSON.stringify({
      username: this.data.username, 
      password: this.data.password
    });
    
    this.http.post(link, myData).subscribe(data => {
      this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
      
      if(this.data.response == "Erfolgreich angemeldet!") {
        this.showToast(this.data.response);
        this.navCtrl.setRoot(TestPage);
      }else {
        this.showToast("Fehler bei der Anmeldung! Versuchs nochmal...");
      }
    }, error => console.trace("Oooops!"));
  }
}