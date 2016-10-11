import {Injectable} from '@angular/core';

@Injectable()
export class TokenHolder {
    private _token: string;

    public setToken(val: string): void {
        this._token = val;
    }

    public getToken(): string {
        return this._token;
    }
}