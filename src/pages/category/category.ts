import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryDetailsPage } from "../category-details/category-details";

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public goCategory(title: string): void {
    this.navCtrl.push(CategoryDetailsPage, {categoryTitle: title});
  }
}
