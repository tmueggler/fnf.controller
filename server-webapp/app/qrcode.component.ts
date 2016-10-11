import {Component, Inject} from "@angular/core";
import {qrcode} from "qrcode-npm";
import {APP_CONFIG, Config} from "./app.config";

@Component({
    selector: 'qrcode',
    templateUrl: 'app/qrcode.component.html'
})
export class QRCodeComponent {
    qrcodeimg: string;

    constructor(@Inject(APP_CONFIG) private cfg: Config,) {
        let code = qrcode(4, 'M');
        code.addData(cfg.redirecturl);
        code.make();
        this.qrcodeimg = code.createImgTag(10, 0);
    }
}