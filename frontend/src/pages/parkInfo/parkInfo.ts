import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ImageService} from '../../services/image.service';
import {Park} from '../../services/park.service';

@Component({
  selector: 'page-parkInfo',
  templateUrl: 'parkInfo.html'
})
export class ParkInfoPage {
  selectedPark: Park;

  constructor(private imageService: ImageService,
              public navCtrl: NavController,
              public navParams: NavParams) {
    this.selectedPark = navParams.get('park');
  }

  getImage() : string{
    return this.imageService.getImage(this.selectedPark.image)
  }
}
