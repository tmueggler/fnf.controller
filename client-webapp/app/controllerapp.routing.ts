import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RegisterComponent} from "./register.component";
import {WelcomeComponent} from "./welcome.component";
import {ControllerComponent} from "./controller.component";
import {ExitComponent} from "./exit.component";

const routes: Routes = [
    {path: 'welcome', component: WelcomeComponent},
    {path: 'controller', component: ControllerComponent},
    {path: 'exit', component: ExitComponent},
    {path: '', component: RegisterComponent}
];

export const routingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);