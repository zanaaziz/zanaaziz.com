import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    endpoint: string = 'http://api.zanadaniel.com/public/'
    showFooter = new EventEmitter<boolean>();

    posts(): Observable<Object> {
        return this.http.get(this.endpoint + 'posts.php');
    }

    post(slug: string, id: string): Observable<Object> {
        return this.http.get(this.endpoint + 'post.php?id=' + id);
    }

    login(username: string, password: string): Observable<Object> {
        return this.http.post(this.endpoint + 'login.php', {
            username: username,
            password: password
        });
    }
}
