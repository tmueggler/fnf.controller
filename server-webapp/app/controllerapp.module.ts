import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import{routingProviders, routing} from './controllerapp.routing';

import {ControllerAppComponent} from './controllerapp.component';
import {QRCodeComponent} from "./qrcode.component";
import {RegisterComponent} from "./register.component";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        ControllerAppComponent,
        QRCodeComponent,
        RegisterComponent,
        DashboardComponent
    ],
    providers: [
        routingProviders
    ],
    bootstrap: [ControllerAppComponent]
})
export class ControllerModule {
}