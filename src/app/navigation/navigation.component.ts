import { Component, OnInit } from '@angular/core';
import { BreakpointObserverService } from '../shared/breakpoint-observer.service';
import { fadeInAnimation } from '../animations';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    animations: [fadeInAnimation]
})
export class NavigationComponent implements OnInit {

    constructor(
        private breakPointObserverService: BreakpointObserverService
    ) { }

    show: boolean = false;
    isMobile: boolean;

    ngOnInit() {
        // detect screen size
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
