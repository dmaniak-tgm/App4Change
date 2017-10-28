import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TestPage } from "../test/test";
import { AboutPage } from '../about/about';
import { FaqPage } from '../faq/faq';
import { ProfilePage } from '../profile/profile';
import { CategoryPage } from '../category/category';

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
  ) { }

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
}
