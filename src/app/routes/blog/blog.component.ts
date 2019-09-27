import { Component, OnInit } from '@angular/core';
import { BreakpointObserverService } from 'src/app/shared/breakpoint-observer.service';
import { Title } from '@angular/platform-browser';
import { fadeInAnimation } from 'src/app/animations';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    animations: [fadeInAnimation]
})
export class BlogComponent implements OnInit {

    constructor(
        private breakPointObserverService: BreakpointObserverService,
        private title: Title
    ) { }

    showIcon: boolean = false;
    showHeader: boolean = false;
    showSubHeader: boolean = false;
    isMobile: boolean;

    ngOnInit() {
        // set title
        this.title.setTitle('Blog | Zana Daniel');

        // detect screen size
        this.breakPointObserverService.isMobile()
		.subscribe(
			result => {
				this.isMobile = result.matches;
            }
        );

        setTimeout(() => {
            this.showIcon = true;
        }, 500);

        setTimeout(() => {
            this.showHeader = true;
        }, 1500);

        setTimeout(() => {
            this.showSubHeader = true;
        }, 2500);
    }

}
