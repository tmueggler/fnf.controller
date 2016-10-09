import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {routing, routingProviders} from "./controllerapp.routing";
import {HttpModule} from "@angular/http";
import {ControllerApp} from "./controllerapp.component";
import {HeaderComponent} from "./header.component";
import {RegisterComponent} from "./register.component";
import {WelcomeComponent} from "./welcome.component";
import {ControllerComponent} from "./controller.component";
import {ExitComponent} from "./exit.component";
import {DeviceOrientationInfoComponent} from "./deviceorientationinfo.component";
//
import {RegistrationService} from "./registration.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [
        ControllerApp,
        HeaderComponent,
        RegisterComponent,
        WelcomeComponent,
        ControllerComponent,
        ExitComponent,
        DeviceOrientationInfoComponent
    ],
    providers: [
        routingProviders,
        RegistrationService
    ],
    bootstrap: [ControllerApp]
})
export class ControllerAppModule {
}
