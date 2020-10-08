import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Post } from './post.interface';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    showFooter = new Subject<boolean>();
    private _posts: Post[] = [];
    private _postsChanges = new Subject<Post[]>();

    onPostsChanges(): Subject<Post[]> {
        return this._postsChanges;
    }

    postsList(): Post[] {
        if (this._posts && this._posts.length === 0) {
           this.http.get(environment.api + '/posts')
            .subscribe(
                res => {
                    this._posts = res['posts'];
                    this._postsChanges.next(this._posts);
                }
            );
        }
        
        return this._posts;
    }

    postDetail(slug: string, id: number): Observable<Object> {
        return this.http.get(environment.api + '/posts/' + id);
    }

    postCreate(title: string, image_url: string, body: string): Observable<Object> {
        return this.http.post(environment.api + '/posts', {
            title: title,
            image_url: image_url,
            body: body
        });
    }

    postUpdate(id: number, title: string, image_url: string, body: string): Observable<Object> {
        return this.http.put(environment.api + '/posts/' + id, {
            title: title,
            image_url: image_url,
            body: body
        });
    }

    postDelete(id: number): Observable<Object> {
        return this.http.delete(environment.api + '/posts/' + id);
	}

	postToggleLive(id: number): Observable<Object> {
        return this.http.put(environment.api + '/posts/' + id + '/live', undefined);
	}

	login(username: string, password: string): Observable<Object> {
		return this.http.post(environment.api + '/login', {
			username: username,
			password: password
		});
	}
}
