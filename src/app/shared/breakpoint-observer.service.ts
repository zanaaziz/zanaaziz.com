import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
	providedIn: 'root'
})
export class BreakpointObserverService {

	constructor(private breakpointObserver: BreakpointObserver) { }

	isMobile() {
		return this.breakpointObserver.observe([
			'(max-width: 840px)'
		]);
	}
}
