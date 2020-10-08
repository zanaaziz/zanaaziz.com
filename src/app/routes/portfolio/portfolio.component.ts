import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BreakpointObserverService } from 'src/app/shared/breakpoint-observer.service';
import { fadeInAnimation } from 'src/app/animations';
import { MomentService } from 'src/app/shared/moment.service';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    animations: [fadeInAnimation]
})
export class PortfolioComponent implements OnInit {

    constructor(
        private title: Title,
		private breakPointObserverService: BreakpointObserverService,
		public moment: MomentService
    ) { }

    showBackground: boolean = false;
    showSkills: boolean = false;
    showExperience: boolean = false;
    isMobile: boolean;
    skills: { management: number, angular: number, java: number, javascript: number, python: number, html: number, css: number, php: number } = { management: 85, angular: 90, java: 85, javascript: 90, python: 90, html: 100, css: 100, php: 50 };

    ngOnInit() {
        // set title
        this.title.setTitle('Portfolio | Zana Aziz');

        // detect screen size
        this.breakPointObserverService.isMobile()
		.subscribe(
			result => {
				this.isMobile = result.matches;
            }
        );

        setTimeout(() => {
            this.showBackground = true;
        }, 250);

        setTimeout(() => {
            this.showSkills = true;
        }, 500);

        setTimeout(() => {
            this.showExperience = true;
        }, 750);
    }

}
