import {Component, OnInit} from '@angular/core';
import {RegistrationService} from './registration.service';

@Component({
    selector: 'exit',
    templateUrl: 'app/exit.component.html'
})
export class ExitComponent implements OnInit {
    title: string;

    constructor(private registration: RegistrationService) {
        this.title = 'Deregistering ...';
    }

    ngOnInit(): void {
        this.registration.free(
            ()=> {
                this.title = 'Good Bey';
            }, ()=> {
                this.title = 'Good Bey';
            }
        );
    }
}