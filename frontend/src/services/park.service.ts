import {Response} from "express";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {environment} from "../environments/environment";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import {HttpClient} from "@angular/common/http";

export interface Park {
	id: string,
  image: string,
	name: string,
	description: string
}

@Injectable()
export class ParkService {

  constructor(private http: HttpClient) {

  }

	public getParks(): Observable<Park[]> {
    return this.http.get(environment.api + 'park')
      .map((res: Response) => res.content);
	}

}
