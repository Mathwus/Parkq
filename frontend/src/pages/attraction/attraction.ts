import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Attraction } from '../../services/attraction.service';

@Component({
  selector: 'page-attraction',
  templateUrl: 'attraction.html'
})
export class AttractionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}
