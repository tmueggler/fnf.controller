import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {routingProviders, routing} from "./controllerapp.routing";
import {ControllerAppComponent} from "./controllerapp.component";
import {QRCodeComponent} from "./qrcode.component";
import {RegisterComponent} from "./register.component";
import {DashboardComponent} from "./dashboard.component";
import {APP_CONFIG, CONFIGURATION} from "./app.config";

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
        {provide: APP_CONFIG, useValue: CONFIGURATION},
        routingProviders
    ],
    bootstrap: [ControllerAppComponent]
})
export class ControllerModule {
}