import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    state = new Subject<string>();

    login(): void {
        this.state.next('1');
        localStorage.setItem('authentication', '1');
    }

    logout(): void {
        this.state.next('0');
        localStorage.removeItem('authentication');
        localStorage.removeItem('token');
    }
}
