import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fadeInAnimation } from 'src/app/animations';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    animations: [fadeInAnimation]
})
export class ContactComponent implements OnInit {

    constructor(
        private title: Title
    ) { }

    showIcon: boolean = false;
    showTitle: boolean = false;
    showParagraph: boolean = false;
    showButton: boolean = false;

    ngOnInit() {
        // set title
        this.title.setTitle('Contact | Zana Aziz');

        setTimeout(() => {
            this.showIcon = true;
        }, 250);

        setTimeout(() => {
            this.showTitle = true;
        }, 500);

        setTimeout(() => {
            this.showParagraph = true;
        }, 750);

        setTimeout(() => {
            this.showButton = true;
        }, 1000);
    }

}
