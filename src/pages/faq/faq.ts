import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  @ViewChild(Slides) slides: Slides;
 
  goToSlide(a,b) {
    this.slides.slideTo(a, b);
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

  openquestion4(){
    if(document.getElementById('open4').style.display === "none") {
      document.getElementById('open4').style.display = "block";
    } else {
      document.getElementById('open4').style.display = "none";
    }
  }
  openquestion5(){
    if(document.getElementById('open5').style.display === "none") {
      document.getElementById('open5').style.display = "block";
    } else {
      document.getElementById('open5').style.display = "none";
    }
  }

  openquestion6(){
    if(document.getElementById('open6').style.display === "none") {
      document.getElementById('open6').style.display = "block";
    } else {
      document.getElementById('open6').style.display = "none";
    }

  }
  openquestion7(){
    if(document.getElementById('open7').style.display === "none") {
      document.getElementById('open7').style.display = "block";
    } else {
      document.getElementById('open7').style.display = "none";
    }
  }
  openquestion8(){
    if(document.getElementById('open8').style.display === "none") {
      document.getElementById('open8').style.display = "block";
    } else {
      document.getElementById('open8').style.display = "none";
    }
  }
  openquestion9(){
    if(document.getElementById('open9').style.display === "none") {
      document.getElementById('open9').style.display = "block";
    } else {
      document.getElementById('open9').style.display = "none";
    }
  }
}
