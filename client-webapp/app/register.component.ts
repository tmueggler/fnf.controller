import {Component, OnInit} from '@angular/core';
import {RegistrationService} from './registration.service';
import {Router} from '@angular/router';
import * as uuid from 'node-uuid';

@Component({
    selector: 'register',
    templateUrl: 'app/register.component.html'
})
export class RegisterComponent implements OnInit {
    title: string;

    constructor(private registration: RegistrationService,
                private router: Router) {
        this.title = 'Registering ...';
    }

    ngOnInit(): void {
        let _uuid = uuid.v1();
        this.registration.claim(
            _uuid,
            ()=> {
                this.title = 'Registration Successfull';
                // TODO
                setTimeout(
                    ()=> {
                        this.router.navigate(['/welcome']);
                    },
                    1000);
            },
            ()=> {
                this.title = 'Registration Failed';
                // TODO
            }
        );
    }
}