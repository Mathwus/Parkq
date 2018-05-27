import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImageService, Image } from '../../services/image.service';
import { Park } from '../../services/park.service';

@Component({
  selector: 'page-parkInfo',
  templateUrl: 'parkInfo.html'
})
export class ParkInfoPage {
  selectedPark: Park;
  image: Image;

  constructor(private imageService: ImageService,
              public navCtrl: NavController, 
              public navParams: NavParams) {
    this.selectedPark = navParams.get('park');
  }

  public ngOnInit(): void {
    this.imageService.getImage(this.selectedPark.image).subscribe((image: Image) => {
      this.image = image;
    });
  }

  getImage() : string{
    if(this.image == null)
      return "";
    return this.image.data;
  }
}
