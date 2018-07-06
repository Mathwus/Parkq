import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {Park, ParkService} from "../../services/park.service";
import {ParkPage} from "../park/park";
import {ImageService} from "../../services/image.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public parks: Park[] = [];

  constructor(private parkService: ParkService,
              private imageService: ImageService,
              public navCtrl: NavController,
              public alertCtrl: AlertController,
              private userService: UserService) {

  }

  public ngOnInit(): void {
    // Busca os parques
    this.parkService.getParks().subscribe((parks: Park[]) => {
      this.parks = parks;
    });

    if(localStorage.getItem("user") == null || localStorage.getItem("user").length <= 0){
      this.tryGetUser();
    }
  }

  getImage(p: Park) : string{
    return this.imageService.getImage(p.image)
  }

  openPark(p) {
    this.navCtrl.push(ParkPage, {park: p});
  }

  public tryGetUser() {
    const prompt = this.alertCtrl.create({
      title: 'Usuário',
      message: "Preencha seu usuário",
      enableBackdropDismiss: false,
      inputs: [
        {
          name: 'usuario',
          placeholder: 'Usuário'
        },
      ],
      buttons: [
        {
          text: 'Confirmar',
          handler: data => {
            console.log(data);
            if(data.usuario == null || data.usuario.length <= 0){
              this.tryGetUser();
            }else{
              let user = this.userService.getUser(data.usuario);
              user.subscribe(
                u => localStorage.setItem("user", u.id),
                error => {
                  console.log(error);
                  this.tryGetUser();
                })
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
