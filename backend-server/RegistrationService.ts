export class RegistrationService {
    private _token: string = null;

    constructor(private _timeout_ms: number) {
    }

    /**
     *
     * @param token to token to check allowance for
     * @returns {boolean} true if token is allowed, false otherwise
     */
    allowed(token: string): boolean {
        return token === this._token;
    }

    /**
     *
     * @param newtoken the new token
     */
    claim(newtoken: string): boolean {
        if (this._token === null) {
            this._token = newtoken;
            this._setTimeout();
            return true;
        } else {
            return false;
        }
    }

    /**
     *
     */
    touch(): void {
        this._clearTimeout();
        this._setTimeout();
    }

    /**
     *
     */
    release(): void {
        this._clearTimeout();
        this._token = null;
    }

    private _timeout: NodeJS.Timer;

    private _setTimeout(): void {
        this._timeout = setTimeout(
            (self: RegistrationService)=> {
                console.log(`Token ${self._token} timed out.`);
                self._token = null;
            },
            this._timeout_ms,
            this
        );
    }

    private _clearTimeout(): void {
        if (this._timeout != null) {
            clearTimeout(this._timeout);
            this._timeout = null;
        }
    }
}