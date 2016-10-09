import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {ControllerAppModule} from './controllerapp.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(ControllerAppModule);
