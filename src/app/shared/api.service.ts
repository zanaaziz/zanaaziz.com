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

    posts(): Post[] {
        if (this._posts.length === 0) {
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

    post(slug: string, id: string): Observable<Object> {
        return this.http.get(environment.api + 'post.php?id=' + id);
    }

    login(username: string, password: string): Observable<Object> {
        return this.http.post(environment.api + 'login.php', {
            username: username,
            password: password
        });
    }

    create(title: string, image: string, body: string): Observable<Object> {
        return this.http.post(environment.api + 'create.php', {
            title: title,
            image: image,
            body: body,
            token: localStorage.getItem('token')
        });
    }

    update(id: string, title: string, image: string, body: string): Observable<Object> {
        return this.http.put(environment.api + 'update.php', {
            id: id,
            title: title,
            image: image,
            body: body,
            token: localStorage.getItem('token')
        });
    }

    delete(id: string): Observable<Object> {
        return this.http.post(environment.api + 'delete.php', {
            id: id,
            token: localStorage.getItem('token')
        });
    }
}
