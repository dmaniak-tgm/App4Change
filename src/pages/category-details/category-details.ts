import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
}
