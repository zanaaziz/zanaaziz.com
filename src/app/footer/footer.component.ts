import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

// google analytics
declare var gtag;

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor(private router: Router) { }

    home: boolean;
    year = new Date().getFullYear();

    ngOnInit() {
        this.router.events
		.subscribe(
			(event: Event) => {
				if (event instanceof NavigationEnd) {
                    if (event instanceof NavigationEnd) {
                        gtag('config', 'UA-109135410-4', {
                            'page_path': event.urlAfterRedirects
                        });
                    }

                    // detect home route
					if (window['location']['pathname'] === '/') {
                        this.home = true;
                        
                    } else {
                        this.home = false;
            
                    }
				}
			}
		);

    }

}
