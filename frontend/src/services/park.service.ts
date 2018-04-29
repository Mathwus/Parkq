import {Response} from "express";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http} from "@angular/http";
import {environment} from "../environments/environment";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";

export interface Park {
	company: number,
	name: string,
	description: string,
	background: number
}

@Injectable()
export class ParkService {

	constructor(private http: Http) {
    }
    
    fixed: Park[] = JSON.parse(
        `[{ "company": 1, "name": "Beto Carreiro World", "description": "ainda não sei", "background": 1 }]`);

	public getParks(): Observable<Park[]> {
        return Observable.of(this.fixed);
        /*
        return this.http.get(environment.api + 'park?size=100')
            .map((res: Response) => res.json().content);
        */
	}

}