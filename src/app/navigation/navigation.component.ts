import { Component, OnInit } from '@angular/core';
import { BreakpointObserverService } from '../shared/breakpoint-observer.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    constructor(
        private breakPointObserverService: BreakpointObserverService
    ) { }

    isMobile: boolean;

    ngOnInit() {
        // detect screen size
        this.breakPointObserverService.isMobile()
		.subscribe(
			result => {
				this.isMobile = result.matches;
            }
        );
    }
    
}
