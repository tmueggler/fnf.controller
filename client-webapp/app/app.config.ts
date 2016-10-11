import {OpaqueToken} from '@angular/core';

export interface Config {
    serviceendpoint: string;
}

export let APP_CONFIG = new OpaqueToken('app.config');

export const CONFIGURATION: Config = {
    serviceendpoint: '//192.168.1.108:50005'
};
