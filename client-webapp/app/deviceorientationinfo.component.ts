import {Component} from '@angular/core';

@Component({
    selector: 'deviceorientation-info',
    templateUrl: 'app/deviceorientationinfo.component.html'
})
export class DeviceOrientationInfoComponent {
    alpha: number = 0;
    beta: number = 0;
    gamma: number = 0;
    absolute: boolean = false;

    private update(evt: DeviceOrientationEvent): void {
        this.alpha = evt.alpha;
        this.beta = evt.beta;
        this.gamma = evt.gamma;
        this.absolute = evt.absolute;
    }
}