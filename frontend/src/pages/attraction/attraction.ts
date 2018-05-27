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

  constructor(private imageService: ImageService,
              public navCtrl: NavController,
              public navParams: NavParams) {
    this.selectedAttraction = navParams.get('attraction');
  }

  public ngOnInit(): void {
    this.hasTicket = false;
    this.imageService.getImage(this.selectedAttraction.image).subscribe((image: Image) => {
      this.image = image;
    });
  }

  requestTicket(){
    this.hasTicket = true;
  }

  cancelTicket(){
    this.hasTicket = false;
  }

  getImage() : string{
    if(this.image == null)
      return "";
    return this.image.data;
  }
}
