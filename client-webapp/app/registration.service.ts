import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RegistrationService {
    private _token: string;
    private _host = 'http://10.195.128.136:50005';

    constructor(private http: Http) {
    }

    claim(token: string, success?: ()=>void, error?: ()=>void): void {
        // TODO check state
        this.http.post(`${this._host}/api/claim/${token}/`, null)
            .subscribe(
                (res)=> {
                    this._token = token;
                    if (success != null) {
                        success();
                    }
                },
                (err)=> {
                    if (error != null) {
                        error();
                    }
                }
            );
    }

    start(name: string): Observable<any> {
        return this.http.post(`${this._host}/api/start/${this._token}/${name}/`, null);
    }

    touch(): Observable<any> {
        return this.http.post(`${this._host}/api/touch/${this._token}/`, null);
    }

    free(success?: ()=>void, error?: ()=>void): void {
        this.http.post(`${this._host}/api/release/${this._token}/`, null)
            .subscribe(
                (res)=> {
                    this._token = null;
                    if (success != null) {
                        success();
                    }
                },
                (err)=> {
                    this._token = null;
                    if (error != null) {
                        error();
                    }
                }
            );
    }
}