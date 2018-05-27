import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImageService, Image } from '../../services/image.service';
import {Attraction} from "../../services/attraction.service";

@Component({
  selector: 'page-attractionInfo',
  templateUrl: 'attractionInfo.html'
})
export class AttractionInfoPage {
  selectedAttraction: Attraction;
  image: Image;

  constructor(private imageService: ImageService,
              public navCtrl: NavController,
              public navParams: NavParams) {
    this.selectedAttraction = navParams.get('attraction');
  }

  public ngOnInit(): void {
    this.imageService.getImage(this.selectedAttraction.image).subscribe((image: Image) => {
      this.image = image;
    });
  }

  getImage() : string{
    if(this.image == null)
      return "";
    return this.image.data;
  }
}
