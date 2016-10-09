declare module 'qrcode-npm' {
    interface QRCode {
        addData(data: any): void;
        make(): void;
        createImgTag(cellsize: number, margin: number): string;
    }

    function qrcode(typeNumber: number, errorCorrectionLevel: string): QRCode;
}