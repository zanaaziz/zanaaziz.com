import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserverService } from '../shared/breakpoint-observer.service';
import { fadeInAnimation } from '../animations';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { SnackService } from '../shared/snack.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PageService } from '../shared/page.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    animations: [fadeInAnimation]
})
export class NavigationComponent implements OnInit, OnDestroy {

    constructor(
        private breakPointObserverService: BreakpointObserverService,
        private auth: AuthService,
        private router: Router,
        private snack: SnackService,
		private dialog: MatDialog,
		public page: PageService
    ) { }

    show: boolean = false;
    isMobile: boolean;
    authenticated: boolean = localStorage.getItem('authentication') === '1' ? true : false;
    private subscriptions: Subscription = new Subscription();

    onLogout(): void {
        const dialogRef = this.dialog.open(LogoutConfirmDialogModel, {
			width: '250px',
			height: '120px'
		});

        dialogRef.afterClosed()
		.subscribe(
            result => {
                if (result === true) {
                    this.auth.logout();
                    this.snack.open('You\'re logged out');
                    this.router.navigate(['/']);
                }
            }
        );
    }

    ngOnInit() {
        this.subscriptions.add(
            this.auth.state
            .subscribe(
                (state: string) => {
                    this.authenticated = state === '1' ? true : false;
                }
            )
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

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    
}

@Component({
	selector: 'confirm-dialog-model',
	templateUrl: '../shared/confirm-dialog.html',
})
export class LogoutConfirmDialogModel {

	constructor(public dialogRef: MatDialogRef<NavigationComponent>) { }

	onYes() {
		this.dialogRef.close(true);
	}

	onNo() {
		this.dialogRef.close(false);
	}

	onClose() {
		this.dialogRef.close(null);
	}
}
