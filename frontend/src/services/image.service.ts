import {Response} from "express";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http} from "@angular/http";
import {environment} from "../environments/environment";
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
        `[{ "id": 1, "name": "Plano Fundo", "Company": 1, "data": "/assets/imgs/logo.png" }]`);        

	public getParks(): Observable<Image[]> {
        return Observable.of(this.fixed);
        /*
        return this.http.get(environment.api + 'park?size=100')
            .map((res: Response) => res.json().content);
        */
	}

}