import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BreakpointObserverService } from 'src/app/shared/breakpoint-observer.service';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

    constructor(
        private title: Title,
        private breakPointObserverService: BreakpointObserverService
    ) { }

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
    }

}
