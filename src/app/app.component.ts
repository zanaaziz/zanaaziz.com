import { Component, OnInit } from '@angular/core';
import { BreakpointObserverService } from './shared/breakpoint-observer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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
