import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TestPage } from "../test/test";
import { AboutPage } from '../about/about';
import { FaqPage } from '../faq/faq';
import { ProfilePage } from '../profile/profile';
import { CategoryPage } from '../category/category';

import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-sidemenu',
  templateUrl: 'sidemenu.html',
})
export class SidemenuPage {
  private rootPage = TestPage;
  
  private faqPage = FaqPage;
  private categoryPage = CategoryPage;
  private aboutPage = AboutPage;
  private profilePage = ProfilePage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private scanner: BarcodeScanner,
    private toastCtrl: ToastController
  ) { }

  public scanQR(): void {
    this.scanner.scan({
      showFlipCameraButton: false,
      showTorchButton: false,
      prompt: "Scan Patron4change QR-Code",
      orientation: "portrait",
      torchOn: false,
      resultDisplayDuration: 0
    }).then((res: BarcodeScanResult) => {
      if(!res.cancelled && this.getPatronId(res)) {
        this.navCtrl.push(ProfilePage); // TODO: need to add id to profile page push 
      }
    });
  }

  public logout(): void {
    console.trace("Needs to be implemented");
  }

  public goFacebook(): void {
    window.open("https://www.facebook.com/patron4change/");
  }

  public goTwitter(): void {
    window.open("https://twitter.com/patron4change");
  }

  public goInsta(): void {
    window.open("https://www.instagram.com/patron4change/");
  }

  public goYT(): void {
    window.open("https://www.youtube.com/playlist?list=PLne435yhSICfjp5hqN9IpCRY5NolZ9c2G");
  }

  private getPatronId(qrcode: BarcodeScanResult): String {
    let content: String = qrcode.text;
    
    if(qrcode.format === "QR_CODE" && content.startsWith("patron4change://profile/")) {
      return content.replace("patron4change://profile/", ""); // replaces with nothing so only id is left
    }
    this.toastCtrl.create({
      message: "Das ist kein Patron4change QR-Code!",
      position: "bottom",
      duration: 1500
    }).present();
    return null;
  }
}
