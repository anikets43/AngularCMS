import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class StartupService {


    _startupData: any;

    startupData: any;
    constructor(private http: Http) { }

    // This is the method you want to call at bootstrap
    // Important: It should return a Promise
    load(): Promise<any> {

        this._startupData = null;

        return this.http
            .get('data/data.json')
            .map((res: Response) => res.json())
            .toPromise()
            .then((data: any) => this.startupData = data)
            .catch((err: any) => Promise.resolve());
    }

    getJSON(url) {
        return this.http.get(url)
            .map((res: Response) => {
                return res.json();
            });
    }
    // get startupData(): any {
    //     return this._startupData;
    // }
}