import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { fadeInAnimation } from 'src/app/animations';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss'],
    animations: [fadeInAnimation]
})
export class PageNotFoundComponent implements OnInit {

    constructor(private title: Title, private router: Router) { }

    show: boolean = false;

    ngOnInit() {
        this.title.setTitle('Page not found | Zana Aziz');

        setTimeout(() => {
            this.show = true;
        }, 250);
    }

}
