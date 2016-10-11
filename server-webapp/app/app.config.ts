import {OpaqueToken} from "@angular/core";

export let APP_CONFIG = new OpaqueToken('app.config');

export interface Config {
    redirecturl: string;
}

export const CONFIGURATION: Config = {
    redirecturl: 'http://192.168.1.108:55555/'
};