import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Park } from '../../services/park.service';

@Component({
  selector: 'page-park',
  templateUrl: 'park.html'
})
export class ParkPage {
  selectedPark: Park;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedPark = navParams.get('park');
  }
}
