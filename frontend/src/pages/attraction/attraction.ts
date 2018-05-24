import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Attraction } from '../../services/attraction.service';
import {Image, ImageService} from "../../services/image.service";

@Component({
  selector: 'page-attraction',
  templateUrl: 'attraction.html'
})
export class AttractionPage {

  selectedAttraction: Attraction;
  image: Image;
  hasTicket: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedAttraction = navParams.get('attraction');
  }
  
  public ngOnInit(): void {
    this.hasTicket = false;
  }

}
