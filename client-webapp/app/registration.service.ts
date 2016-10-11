import {Injectable, Inject} from "@angular/core";
import {APP_CONFIG, Config} from "./app.config";
import {Http} from "@angular/http";
import {TokenHolder} from './tokenholder';
import {Observable} from "rxjs/Observable";

@Injectable()
export class RegistrationService {
    constructor(@Inject(APP_CONFIG) private cfg: Config, private http: Http, private token: TokenHolder) {
    }

    claim(token: string, success?: ()=>void, error?: ()=>void): void {
        // TODO check state
        this.http.post(`${this.cfg.serviceendpoint}/api/claim/${token}/`, null)
            .subscribe(
                (res)=> {
                    this.token.setToken(token);
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
        return this.http.post(`${this.cfg.serviceendpoint}/api/start/${this.token.getToken()}/${name}/`, null);
    }

    touch(): Observable<any> {
        return this.http.post(`${this.cfg.serviceendpoint}/api/touch/${this.token.getToken()}/`, null);
    }

    free(success?: ()=>void, error?: ()=>void): void {
        this.http.post(`${this.cfg.serviceendpoint}/api/release/${this.token.getToken()}/`, null)
            .subscribe(
                (res)=> {
                    this.token.setToken(null);
                    if (success != null) {
                        success();
                    }
                },
                (err)=> {
                    this.token.setToken(null);
                    if (error != null) {
                        error();
                    }
                }
            );
    }
}