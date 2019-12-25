import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    authentication = new EventEmitter<string>();

    login(): void {
        this.authentication.emit('1');
        localStorage.setItem('authentication', '1');
    }

    logout(): void {
        this.authentication.emit('0');
        localStorage.removeItem('authentication');
        localStorage.removeItem('token');
    }
}
