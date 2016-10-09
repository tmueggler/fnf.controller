import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {QRCodeComponent} from "./qrcode.component";
import {RegisterComponent} from "./register.component";
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '', component: QRCodeComponent}
];

export const routingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);