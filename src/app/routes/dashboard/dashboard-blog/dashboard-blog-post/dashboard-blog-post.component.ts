import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/shared/api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/shared/post.interface';
import { fadeInAnimation } from 'src/app/animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BreakpointObserverService } from 'src/app/shared/breakpoint-observer.service';
import { SnackService } from 'src/app/shared/snack.service';

@Component({
    selector: 'app-dashboard-blog-post',
    templateUrl: './dashboard-blog-post.component.html',
    styleUrls: ['./dashboard-blog-post.component.scss'],
    animations: [fadeInAnimation]
})
export class DashboardBlogPostComponent implements OnInit {

    constructor(
        private title: Title,
        private api: ApiService,
        private router: Router,
        private route: ActivatedRoute,
        private breakPointObserverService: BreakpointObserverService,
        private snack: SnackService
    ) { }

    show: boolean = false;
    loading: boolean = true;
    post: Post;
    isMobile: boolean;
	creating: boolean;
	
    form: FormGroup = new FormGroup({
		title: new FormControl(null, Validators.required),
		image_url: new FormControl(null),
		body: new FormControl(null, Validators.required)
	});

    onSubmit(): void {
        this.loading = true;

        if (this.creating) {
            this.api.postCreate(this.form.get('title').value, this.form.get('image_url').value, this.form.get('body').value)
            .subscribe(
                res => {
                    this.loading = false;
                    this.snack.open('Your post has been created');
                    this.router.navigate(['../'], { relativeTo: this.route });
                },
                err => {
                    console.log(err);
                    
                }
            );
            
        } else {
            this.api.postUpdate(this.post.id, this.form.get('title').value, this.form.get('image_url').value, this.form.get('body').value)
            .subscribe(
                res => {
                    this.loading = false;
                    this.snack.open('Your post has been updated');
                    this.router.navigate(['../'], { relativeTo: this.route });
                },
                err => {
                    console.log(err);
                    
                }
            );
            
        }
    }

    ngOnInit() {
        this.route.params
        .subscribe(
            (params: Params) => {
                this.route.queryParams
                .subscribe(
                    (queries: Params) => {
                        if (params['slug'] === 'create' && queries['id'] === undefined) {
                            this.title.setTitle('Create blog post');
                            this.creating = true;
                            this.loading = false;
                            this.api.showFooter.next(true);
            
                            setTimeout(() => {
                                this.show = true;
                            }, 250);
                            
                        } else if (params['slug'] !== undefined && queries['id'] !== undefined) {
                            this.title.setTitle('Update blog post');
                            this.creating = false;

                            this.api.postDetail(params['slug'], queries['id'])
                            .subscribe(
                                (res: Post) => {
                                    this.post = res;

                                    this.form.get('title').setValue(this.post.title);
                                    this.form.get('image_url').setValue(this.post.image_url);
                                    this.form.get('body').setValue(this.post.body);

                                    this.loading = false;
                                    this.api.showFooter.next(true);
                    
                                    setTimeout(() => {
                                        this.show = true;
                                    }, 250);
                    
                                },
                                err => {
                                    console.log(err);
                                    
                                }
                            );

                        }
                    }
                );
            }
        );

        this.breakPointObserverService.isMobile()
		.subscribe(
			result => {
				this.isMobile = result.matches;
            }
        );
    }

}
