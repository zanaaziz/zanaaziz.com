import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations';
import { ApiService } from 'src/app/shared/api.service';
import { Post } from 'src/app/shared/post.interface';
import { Title } from '@angular/platform-browser';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SnackService } from 'src/app/shared/snack.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-dashboard-blog',
    templateUrl: './dashboard-blog.component.html',
    styleUrls: ['./dashboard-blog.component.scss'],
    animations: [fadeInAnimation]
})
export class DashboardBlogComponent implements OnInit {

    constructor(
        private api: ApiService,
        private title: Title,
        private snack: SnackService,
        private dialog: MatDialog
    ) { }

    isMobile: boolean;
    loading: boolean = true;
    show: boolean = false;

    posts: MatTableDataSource<Post>;
    columns: string[] = ['id', 'title', 'date', 'actions'];
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    onDelete(post: Post): void {
        const dialogRef = this.dialog.open(DeleteConfirmDialogModel, {
			width: '250px',
			height: '120px'
		});

        dialogRef.afterClosed()
		.subscribe(
            result => {
                if (result === true) {
                    this.loading = true;
                    this.api.delete(post['id'])
                    .subscribe(
                        res => {
                            this.loading = false;
                            const index = this.posts.data.indexOf(post, 0);
                            if (index > -1) { this.posts.data.splice(index, 1); }
                            this.posts = new MatTableDataSource(this.posts.data);
                            this.posts.sort = this.sort;
                            this.snack.open('Your post has been deleted');
                        }
                    );
                }
            }
        );
    }

    ngOnInit() {
        this.title.setTitle('Manage blog | Zana Daniel');

        this.api.posts()
        .subscribe(
            res => {
                this.posts = new MatTableDataSource(res['data']);
                this.posts.sort = this.sort;
                this.loading = false;
                this.api.showFooter.emit(true);

                setTimeout(() => {
                    this.show = true
                }, 250);
            },
            err => {
                console.log(err);
                
            }
        );
    }

}

@Component({
	selector: 'confirm-dialog-model',
	templateUrl: '../../../shared/confirm-dialog.html',
})
export class DeleteConfirmDialogModel {

	constructor(public dialogRef: MatDialogRef<DashboardBlogComponent>) { }

	onYes() {
		this.dialogRef.close(true);
	}

	onNo() {
		this.dialogRef.close(false);
	}

	onClose() {
		this.dialogRef.close(null);
	}
}
