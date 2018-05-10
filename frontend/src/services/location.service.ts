import {Response} from "express";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http} from "@angular/http";
import {environment} from "../environments/environment";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";

export interface Location {
  id: number,
  description: string,
}

@Injectable()
export class LocationService {

  constructor(private http: Http) {
  }

  fixed: Location[] = JSON.parse(
    `[{ "id": 1, "description": "ainda não sei" }]`);

  public getLocations(): Observable<Location[]> {
    return Observable.of(this.fixed);
    /*
    return this.http.get(environment.api + 'park?size=100')
        .map((res: Response) => res.json().content);
    */
  }

}
