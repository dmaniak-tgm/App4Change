import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
 

  openquestion1(){
    if(document.getElementById('open1').style.display === "none") {
      document.getElementById('open1').style.display = "block";
    } else {
      document.getElementById('open1').style.display = "none";
    }
  }
  openquestion2(){
    if(document.getElementById('open2').style.display === "none") {
      document.getElementById('open2').style.display = "block";
    } else {
      document.getElementById('open2').style.display = "none";
    }
  }
  openquestion3(){
    if(document.getElementById('open3').style.display === "none") {
      document.getElementById('open3').style.display = "block";
    } else {
      document.getElementById('open3').style.display = "none";
    }
  }


}
