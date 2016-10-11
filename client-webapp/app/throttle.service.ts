import {Injectable, Inject} from "@angular/core";
import {APP_CONFIG, Config} from "./app.config";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {TokenHolder} from "./tokenholder";

@Injectable()
export class ThrottleService {
    constructor(@Inject(APP_CONFIG) private cfg: Config, private http: Http, private token: TokenHolder) {
    }

    send(val: number): Observable<any> {
        return this.http.post(`${this.cfg.serviceendpoint}/api/throttle/${this.token.getToken()}/${val}/`, null);
    }
}