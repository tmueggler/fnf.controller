import {Component, Input} from '@angular/core';

@Component({
    selector: 'ffctrl-header',
    templateUrl: 'app/header.component.html'
})
export class HeaderComponent {
    @Input() title: string;
}
