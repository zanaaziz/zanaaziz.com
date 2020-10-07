import { Component, OnInit } from '@angular/core';
import { BreakpointObserverService } from 'src/app/shared/breakpoint-observer.service';
import { Title } from '@angular/platform-browser';
import { fadeInAnimation } from 'src/app/animations';
import { ApiService } from 'src/app/shared/api.service';
import { Post } from 'src/app/shared/post.interface';
import { MomentService } from 'src/app/shared/moment.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    animations: [fadeInAnimation]
})
export class BlogComponent implements OnInit {

    constructor(
        private breakPointObserverService: BreakpointObserverService,
        private title: Title,
        private api: ApiService,
        private moment: MomentService
    ) { }

    show: boolean = false;
    isMobile: boolean;
    posts: Post[];
    loading: boolean = true;

    calculate(timestamp: string): string {
        return this.moment.calculate(timestamp);
    }

    render() {
        if (this.posts && this.posts.length !== 0) {
            this.loading = false;
            this.api.showFooter.next(true);

            setTimeout(() => {
                this.show = true;
            }, 250);
        }
    }

    ngOnInit() {
        // set title
        this.title.setTitle('Blog | Zana Aziz');

        // detect screen size
        this.breakPointObserverService.isMobile()
		.subscribe(
			result => {
				this.isMobile = result.matches;
            }
        );

        this.api.onPostsChanges()
        .subscribe(
            (posts: Post[]) => {
                this.posts = posts;
                this.render();
            }
        );

        this.posts = this.api.postsList();
        this.render();
    }

}
