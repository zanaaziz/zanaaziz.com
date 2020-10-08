import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BreakpointObserverService } from 'src/app/shared/breakpoint-observer.service';
import { fadeInAnimation } from 'src/app/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        fadeInAnimation
    ]
})
export class HomeComponent implements OnInit {

    constructor(
        private breakPointObserverService: BreakpointObserverService,
        private title: Title
    ) { }

    isMobile: boolean;
    showSmiley: boolean = false;
    showGreeting: boolean = false;
    showName: boolean = false;
    showTitle: boolean = false;
    showButton: boolean = false;

    ngOnInit() {
        // set title
        this.title.setTitle('Home | Zana Aziz');
        
        // detect screen size
        this.breakPointObserverService.isMobile()
		.subscribe(
			result => {
				this.isMobile = result.matches;
            }
		);
		
		setTimeout(() => {
            this.showGreeting = true;
        }, 250);

        setTimeout(() => {
            this.showName = true;
        }, 1250);

        setTimeout(() => {
            this.showTitle = true;
        }, 2250);

        setTimeout(() => {
            this.showButton = true;
		}, 3250);
		
		setTimeout(() => {
            this.showSmiley = true;
        }, 5250);
    }

}
