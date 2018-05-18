import {Response} from "express";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http} from "@angular/http";
import {environment} from "../environments/environment";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";

export interface Company {
	id: number,
	name: string,
	description: string,
	image: number
}

@Injectable()
export class CompanyService {

	constructor(private http: Http) {
    }
    
    fixed: Company[] = JSON.parse(
        `[{ "id": 1, "name": "Beto Carreiro World", "description": "ainda não sei", "image": 1 }]`);

	public getParks(): Observable<Company[]> {
        return Observable.of(this.fixed);
        /*
        return this.http.get(environment.api + 'park?size=100')
            .map((res: Response) => res.json().content);
        */
	}

}