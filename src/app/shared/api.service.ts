import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    endpoint: string = './api.zanadaniel.com/public/'
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

    create(title: string, image: string, body: string): Observable<Object> {
        return this.http.post(this.endpoint + 'create.php', {
            title: title,
            image: image,
            body: body,
            token: localStorage.getItem('token')
        });
    }

    update(id: string, title: string, image: string, body: string): Observable<Object> {
        return this.http.put(this.endpoint + 'update.php', {
            id: id,
            title: title,
            image: image,
            body: body,
            token: localStorage.getItem('token')
        });
    }

    delete(id: string): Observable<Object> {
        return this.http.post(this.endpoint + 'delete.php', {
            id: id,
            token: localStorage.getItem('token')
        });
    }
}
