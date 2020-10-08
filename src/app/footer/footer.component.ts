import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, Event, NavigationStart } from '@angular/router';
import { fadeInAnimation } from '../animations';
import { ApiService } from '../shared/api.service';
import { Subscription } from 'rxjs';
import { PageService } from '../shared/page.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    animations: [fadeInAnimation]
})
export class FooterComponent implements OnInit, OnDestroy {

    constructor(private router: Router, private api: ApiService, private page: PageService) { }

    show: boolean = false;
    home: boolean;
    year = new Date().getFullYear();
    timer: any;
    private subscriptions: Subscription = new Subscription();

    ngOnInit() {
        this.router.events
		.subscribe(
			(event: Event) => {
                if (event instanceof NavigationStart) {
                    clearTimeout(this.timer);
                    this.show = false;
                }

				if (event instanceof NavigationEnd) {
					this.page.path = window['location']['pathname'];

                    // detect home route
					if (window['location']['pathname'] === '/') {
                        this.home = true;
                        
                    } else {
                        this.home = false;
            
                    }

                    if (!window['location']['pathname'].includes('/blog')) {
                        this.timer = setTimeout(() => {
                            this.show = true;
                        }, 4000);
                    }
                    
				}
			}
        );
        
        this.subscriptions.add(
            this.api.showFooter
            .subscribe(
                (show: boolean) => {
                    if (show && window['location']['pathname'].includes('/blog')) {
                        this.timer = setTimeout(() => {
                            this.show = true;
                        }, 250);
                    }
                }
            )
        );

    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

}
