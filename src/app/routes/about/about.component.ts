import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fadeInAnimation } from 'src/app/animations';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    animations: [fadeInAnimation]
})
export class AboutComponent implements OnInit {

    constructor(
        private title: Title
    ) { }

    showTitle: boolean = false;
    showP1: boolean = false;
    showP2: boolean = false;
    showP3: boolean = false;
    showButton: boolean = false;

    ngOnInit() {
        // set title
        this.title.setTitle('About | Zana Daniel');

        setTimeout(() => {
            this.showTitle = true;
        }, 250);

        setTimeout(() => {
            this.showP1 = true;
        }, 500);

        setTimeout(() => {
            this.showP2 = true;
        }, 750);

        setTimeout(() => {
            this.showP3 = true;
        }, 1000);

        setTimeout(() => {
            this.showButton = true;
        }, 1250);
    }

}
