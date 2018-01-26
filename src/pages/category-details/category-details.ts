import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MissionPage } from "../mission/mission";

@Component({
  selector: 'page-category-details',
  templateUrl: 'category-details.html',
})
export class CategoryDetailsPage {
  title: String = "Loading...";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get("categoryTitle");
  }

  isUmwelt():boolean {
    return this.title === "Umwelt";
  }

  openProfile() {
    this.navCtrl.push(MissionPage);
  }
}
