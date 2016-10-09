import{platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {ControllerModule} from './controllerapp.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(ControllerModule);