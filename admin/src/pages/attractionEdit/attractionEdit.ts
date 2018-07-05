import {Component} from "@angular/core";
import {Attraction, AttractionService} from "../../services/attraction.service";
import {ImageService} from "../../services/image.service";
import {Events, NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-attractionEdit',
  templateUrl: 'attractionEdit.html'
})
export class AttractionEditPage {
  selectedAttraction: Attraction;
  originAttraction: Attraction;
  attractions: Attraction[];

  constructor(private imageService: ImageService,
              public navCtrl: NavController,
              public navParams: NavParams,
              public service: AttractionService,
              public events:Events) {
    // If we navigated to this page, we will have an item available as a nav param
    this.originAttraction = navParams.get('attraction');
    this.selectedAttraction = { id :this.originAttraction.id, image: this.originAttraction.image, name: this.originAttraction.name, description: this.originAttraction.description };
  }

  public ngOnInit(): void {

  }

  public save(){
    this.originAttraction.image = this.selectedAttraction.image;
    this.originAttraction.name = this.selectedAttraction.name;
    this.originAttraction.description = this.selectedAttraction.description;
    this.service.postAttraction(this.originAttraction)
      .subscribe({
        complete : () => {
          this.events.publish('reloadAttractions');
          this.navCtrl.pop()
        }
        , error: err => console.log(err)})

  }

  getImage() : string{
    return this.imageService.getImage(this.selectedAttraction.image)
  }

}
