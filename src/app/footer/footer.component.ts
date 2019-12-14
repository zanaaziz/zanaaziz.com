import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event, NavigationStart } from '@angular/router';
import { fadeInAnimation } from '../animations';

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
