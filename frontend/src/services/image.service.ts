import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import {environment} from "../environments/environment";

export interface Image {
  id: string,
  data: string
}

@Injectable()
export class ImageService {

	constructor() {

  }

  public getImage(id: String): string {
    if(id == null || id.length <= 0)
      return "assets/imgs/empty.png";
    return environment.api + "image?id=" + id;
  }
}
