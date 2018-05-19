import {Response} from "express";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";

export interface Image {
    id: number,
    data: string,
	name: string,
	company: number
}

@Injectable()
export class ImageService {

	constructor(private http: Http) {
    }

    fixed: Image[] = JSON.parse(
        `[{ "id": 1, "name": "Plano Fundo", "Company": 1, "data": "/assets/imgs/beto-carrero.png" },
        { "id": 2, "name": "Parque das aguas", "Company": 1, "data": "/assets/imgs/parque-aguas.jpg" },
        { "id": 3, "name": "Navio Pirata", "Company": 1, "data": "/assets/imgs/navio-pirata.jpg" },
        { "id": 4, "name": "Disney", "Company": 1, "data": "/assets/imgs/disney.jpg" }]`);

	public getImages(): Observable<Image[]> {
        return Observable.of(this.fixed);
        /*
        return this.http.get(environment.api + 'park?size=100')
            .map((res: Response) => res.json().content);
        */
	}
	
  public getImage(image: number): Observable<Image> {
    return Observable.of(this.fixed.find(i => i.id == image));
  }
}
