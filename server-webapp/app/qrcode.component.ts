import {Component} from '@angular/core';
import {qrcode} from 'qrcode-npm';

@Component({
    selector: 'qrcode',
    templateUrl: 'app/qrcode.component.html'
})
export class QRCodeComponent {
    qrcodeimg: string;

    constructor() {
        let code = qrcode(4, 'M');
        code.addData('http://10.195.128.136:55555');
        code.make();
        this.qrcodeimg = code.createImgTag(10, 0);
    }
}