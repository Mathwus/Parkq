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
    this.selectedAttraction = { id :this.originAttraction.id, image: this.originAttraction.image, company: this.originAttraction.company, park: this.originAttraction.park, name: this.originAttraction.name, description: this.originAttraction.description, linesize: this.originAttraction.linesize , estimatedtime: this.originAttraction.estimatedtime, location: this.originAttraction.location };
  }

  public ngOnInit(): void {

  }

  public save(){
    this.originAttraction.image = this.selectedAttraction.image;
    this.originAttraction.company = this.selectedAttraction.company;
    this.originAttraction.park = this.selectedAttraction.park;
    this.originAttraction.name = this.selectedAttraction.name;
    this.originAttraction.description = this.selectedAttraction.description;
    this.originAttraction.linesize = this.selectedAttraction.linesize;
    this.originAttraction.estimatedtime = this.selectedAttraction.estimatedtime;
    this.originAttraction.location = this.selectedAttraction.location;
    this.service.postAttraction(this.originAttraction)
      .subscribe({
        complete : () => {
          this.events.publish('reloadAttractions');
          this.navCtrl.pop()
        }
        , error: err => console.log(err)})

  }

  public getTypeOperation() : string {
    if(this.selectedAttraction.id == "")
      return "Criação";
    else return "Alteracao";
  }

  getImage() : string{
    return this.imageService.getImage(this.selectedAttraction.image)
  }

}
