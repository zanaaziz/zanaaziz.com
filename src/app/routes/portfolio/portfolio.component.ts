import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BreakpointObserverService } from 'src/app/shared/breakpoint-observer.service';
import { fadeInAnimation } from 'src/app/animations';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    animations: [fadeInAnimation]
})
export class PortfolioComponent implements OnInit {

    constructor(
        private title: Title,
        private breakPointObserverService: BreakpointObserverService
    ) { }

    showBackground: boolean = false;
    showSkills: boolean = false;
    showExperience: boolean = false;
    isMobile: boolean;
    skills: { angular: number, java: number, javascript: number, python: number, html: number, css: number } = { angular: 85, java: 90, javascript: 85, python: 80, html: 100, css: 100 };

    ngOnInit() {
        // set title
        this.title.setTitle('Portfolio | Zana Daniel');

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
