import { Component, OnInit } from '@angular/core';
import { BreakpointObserverService } from '../shared/breakpoint-observer.service';
import { fadeInAnimation } from '../animations';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { SnackService } from '../shared/snack.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    animations: [fadeInAnimation]
})
export class NavigationComponent implements OnInit {

    constructor(
        private breakPointObserverService: BreakpointObserverService,
        private auth: AuthService,
        private router: Router,
        private snack: SnackService
    ) { }

    show: boolean = false;
    isMobile: boolean;
    authenticated: boolean = localStorage.getItem('authentication') === '1' ? true : false;

    onLogout(): void {
        this.auth.logout();
        this.snack.open('You\'re logged out');
        this.router.navigate(['/']);
    }

    ngOnInit() {
        this.auth.authentication
        .subscribe(
            (authentication: string) => {
                this.authenticated = authentication === '1' ? true : false;
            }
        );

        this.breakPointObserverService.isMobile()
		.subscribe(
			result => {
				this.isMobile = result.matches;
            }
        );

        setTimeout(() => {
            this.show = true;
        }, 250);
    }
    
}
