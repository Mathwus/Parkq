import {Component} from "@angular/core";
import {Park, ParkService} from "../../services/park.service";
import {ImageService} from "../../services/image.service";
import {Events, NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-parkEdit',
  templateUrl: 'parkEdit.html'
})
export class ParkEditPage {
  selectedPark: Park;
  originPark: Park;
  parks: Park[];

  constructor(private imageService: ImageService,
              public navCtrl: NavController,
              public navParams: NavParams,
              public service: ParkService,
              public events:Events) {
    // If we navigated to this page, we will have an item available as a nav param
    this.originPark = navParams.get('park');
    this.selectedPark = { id :this.originPark.id, image: this.originPark.image, name: this.originPark.name, description: this.originPark.description };
  }

  public ngOnInit(): void {

  }

  public save(){
    this.originPark.image = this.selectedPark.image;
    this.originPark.name = this.selectedPark.name;
    this.originPark.description = this.selectedPark.description;
    this.service.postPark(this.originPark)
      .subscribe({
        complete : () => {
          this.events.publish('reloadParks');
          this.navCtrl.pop()
        }
        , error: err => console.log(err)})

  }

  public getTypeOperation() : string {
    if(this.selectedPark.id == "")
      return "Criação";
    else return "Alteracao";
  }

  getImage() : string{
    return this.imageService.getImage(this.selectedPark.image)
  }

}
