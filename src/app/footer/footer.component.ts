import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event, NavigationStart } from '@angular/router';
import { fadeInAnimation } from '../animations';
import { ApiService } from '../shared/api.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    animations: [fadeInAnimation]
})
export class FooterComponent implements OnInit {

    constructor(private router: Router, private api: ApiService) { }

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
                    // detect home route
					if (window['location']['pathname'] === '/') {
                        this.home = true;
                        
                    } else {
                        this.home = false;
            
                    }

                    if (!window['location']['pathname'].includes('/blog')) {
                        this.timer = setTimeout(() => {
                            this.show = true;
                        }, 3000);
                    }
                    
				}
			}
        );
        
        this.api.showFooter
        .subscribe(
            (show: boolean) => {
                if (show && window['location']['pathname'].includes('/blog')) {
                    this.timer = setTimeout(() => {
                        this.show = true;
                    }, 250);
                }
            }
        );

    }

}
