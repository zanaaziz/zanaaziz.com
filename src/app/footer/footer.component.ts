import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event, NavigationStart } from '@angular/router';
import { fadeInAnimation } from '../animations';

// google analytics
declare var gtag;

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    animations: [fadeInAnimation]
})
export class FooterComponent implements OnInit {

    constructor(private router: Router) { }

    show: boolean = false;
    home: boolean;
    year = new Date().getFullYear();
    timer: any;

    ngOnInit() {
        this.router.events
		.subscribe(
			(event: Event) => {
                if (event instanceof NavigationStart) {
                    clearTimeout(this.timer);
                    this.show = false;
                }

				if (event instanceof NavigationEnd) {
                    // google analytics track individual pageview
                    gtag('config', 'UA-109135410-4', {
                        'page_path': event.urlAfterRedirects
                    });

                    // detect home route
					if (window['location']['pathname'] === '/') {
                        this.home = true;
                        
                    } else {
                        this.home = false;
            
                    }

                    this.timer = setTimeout(() => {
                        this.show = true;
                    }, 3000);
				}
			}
		);

    }

}
