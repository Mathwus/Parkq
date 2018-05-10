import {Response} from "express";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http} from "@angular/http";
import {environment} from "../environments/environment";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";

export interface Attraction {
  id: number,
  name: string,
  qtyTicketsEntrain: number,
  timeEntrain: number,
  location: number,
  image: number,
}

@Injectable()
export class AttractionService {

  constructor(private http: Http) {
  }

  fixed: Attraction[] = JSON.parse(
    `[{ "id": 1, "name": "Parque das aguas" }]`);

  public getAttractions(): Observable<Attraction[]> {
    return Observable.of(this.fixed);
    /*
    return this.http.get(environment.api + 'park?size=100')
        .map((res: Response) => res.json().content);
    */
  }

}
