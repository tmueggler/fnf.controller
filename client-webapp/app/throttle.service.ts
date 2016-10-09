import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class ThrottleService {
    private _host = 'http://10.195.128.136:50005';

    constructor(private http: Http) {
    }

    send(val: number): Observable<any> {
        return this.http.post(`${this._host}/api/throttle/${val}/`, null);
    }
}