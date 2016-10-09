import {Component} from '@angular/core';
import {ThrottleService} from './throttle.service';

@Component({
    selector: 'controller',
    templateUrl: 'app/controller.component.html',
    styleUrls: ['app/controller.component.css'],
    providers: [ThrottleService]
})
export class ControllerComponent {
    private title: string = "Controller";
    private throttleMin: number = 0;
    private throttleMax: number = 255;
    private throttleRange: number = this.throttleMax - this.throttleMin;
    private currentbeta: number = 0;
    private betaMax: number = 0;
    private betaMin: number = 0;
    private betaRange: number = 90;
    private throttle: number = this.throttleMin;

    constructor(private throttleService: ThrottleService) {
    }

    slidervalue(val: number): void {
        if (!this.manual) {
            return;
        }
        this._updatethrottle(val);
    }

    deviceorientation(evt: DeviceOrientationEvent): void {
        this.currentbeta = evt.beta;
        if (this.manual) {
            return;
        }
        if (this.currentbeta < this.betaMin) {
        } else if (this.currentbeta > this.betaMax) {
        } else {
            let newthrottle = ((this.betaMax - this.currentbeta) / this.betaRange) * this.throttleRange;
            this._updatethrottle(newthrottle);
        }
    }

    private _updatethrottle(val: number): void {
        this.throttleService.send(val)
            .subscribe(
                (res)=> {
                    this.throttle = val;
                },
                (err)=> {
                    console.log(err);
                }
            );
    }

    private MANUAL_MODE = 'Manual > Device';
    private DEVICE_MODE = 'Device > Manual';
    private manual: boolean = true;
    private mode: string = this.MANUAL_MODE;

    switchmode(): void {
        if (this.manual) {
            this._switchtodeviceorientation();
        } else {
            this._switchtoslider();
        }
    }

    private _switchtoslider(): void {
        this.manual = true;
        this.mode = this.MANUAL_MODE;
        this._updatethrottle(0);
    }

    private _switchtodeviceorientation(): void {
        this.betaMax = this.currentbeta;
        this.betaMin = this.betaMax - this.betaRange;
        this.manual = false;
        this.mode = this.DEVICE_MODE;
        this._updatethrottle(0);
    }
}