import {Response} from "express";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http} from "@angular/http";
import {environment} from "../environments/environment";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";

export interface Attraction {
  id: number,
  idPark: number,
  name: string,
  description: string,
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
    `[{ "id": 1, "idPark": 1, "name": "Parque das Águas", "description": "Descrição do Parque das Águas: Bem Legal", "qtyTicketsEntrain": 1, "timeEntrain": 1, "location": 1, "image": 2 },
    { "id": 2, "idPark": 1, "name": "Navio Pirata", "description": "Navio Pirata", "qtyTicketsEntrain": 1, "timeEntrain": 1, "location": 1, "image": 3 }]`);

  public getAttractions(): Observable<Attraction[]> {
    return Observable.of(this.fixed);
    /*
    return this.http.get(environment.api + 'park?size=100')
        .map((res: Response) => res.json().content);
    */
  }

  public getAttractionsOfPark(idPark): Observable<Attraction[]> {
    return Observable.of(this.fixed.filter(a => a.idPark == idPark));
    /*
    return this.http.get(environment.api + 'park?size=100')
        .map((res: Response) => res.json().content);
    */
  }
}
