import { Component, OnInit } from '@angular/core';
import { BreakpointObserverService } from 'src/app/shared/breakpoint-observer.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private breakPointObserverService: BreakpointObserverService,
        private title: Title
    ) { }

    isMobile: boolean;

    ngOnInit() {
        // set title
        this.title.setTitle('Home | Zana Daniel');

        // detect screen size
        this.breakPointObserverService.isMobile()
		.subscribe(
			result => {
				this.isMobile = result.matches;
            }
        );
    }

}
