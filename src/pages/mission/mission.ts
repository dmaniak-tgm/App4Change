import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-mission',
  templateUrl: 'mission.html',
})
export class MissionPage {
  like: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  likeIt(): void {
    this.like++;
  }
}
