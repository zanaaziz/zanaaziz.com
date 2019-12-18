import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/shared/api.service';
import { MomentService } from 'src/app/shared/moment.service';
import { BreakpointObserverService } from 'src/app/shared/breakpoint-observer.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/shared/post.interface';
import { PrismService } from 'src/app/shared/prism.service';

@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.scss'],
    animations: [fadeInAnimation]
})
export class BlogPostComponent implements OnInit {

    constructor(
        private breakPointObserverService: BreakpointObserverService,
        private title: Title,
        private api: ApiService,
        private moment: MomentService,
        private route: ActivatedRoute,
        private prism: PrismService
    ) { }

    show: boolean = false;
    isMobile: boolean;
    loading: boolean = true;
    post: Post;

    calculate(timestamp: string): string {
        return this.moment.calculate(timestamp);
    }

    ngOnInit() {
        this.breakPointObserverService.isMobile()
		.subscribe(
			result => {
				this.isMobile = result.matches;
            }
        );

        this.route.params
        .subscribe(
            (params: Params) => {
                this.route.queryParams
                .subscribe(
                    (queries: Params) => {
                        if (params['slug'] !== undefined && queries['id'] !== undefined) {
                            this.api.post(params['slug'], queries['id'])
                            .subscribe(
                                res => {
                                    this.post = res['data'];
                                    this.title.setTitle(this.post['title'] + ' | Zana Daniel');
                                    this.loading = false;
                                    this.api.showFooter.emit(true);
                    
                                    setTimeout(() => {
                                        this.prism.highlight();
                                        this.show = true;
                                    }, 250);
                    
                                },
                                err => {
                                    console.log(err);
                                    this.title.setTitle('Post not found | Zana Daniel');
                                    this.loading = false;
                                    this.api.showFooter.emit(true);
                    
                                    setTimeout(() => {
                                        this.show = true;
                                    }, 250);
                                    
                                }
                            );
                        }
                    }
                );
            }
        );

    }

}
