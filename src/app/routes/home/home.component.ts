import { Component, OnInit } from '@angular/core';
import { BreakpointObserverService } from 'src/app/shared/breakpoint-observer.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private breakPointObserverService: BreakpointObserverService) { }

    isMobile: boolean;

    ngOnInit() {
        this.breakPointObserverService.isMobile()
		.subscribe(
			result => {
				this.isMobile = result.matches;
		});
    }

}
