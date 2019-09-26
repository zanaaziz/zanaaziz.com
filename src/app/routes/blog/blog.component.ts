import { Component, OnInit } from '@angular/core';
import { BreakpointObserverService } from 'src/app/shared/breakpoint-observer.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    constructor(
        private breakPointObserverService: BreakpointObserverService,
        private title: Title
    ) { }

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
    }

}
