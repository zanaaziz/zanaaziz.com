import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fadeInAnimation } from 'src/app/animations';
import { ApiService } from 'src/app/shared/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackService } from 'src/app/shared/snack.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './dashboard-login.component.html',
    styleUrls: ['./dashboard-login.component.scss'],
    animations: [fadeInAnimation]
})
export class LoginComponent implements OnInit {

    constructor(
        private title: Title,
        private api: ApiService,
        private router: Router,
        private snack: SnackService,
        private auth: AuthService
    ) { }

    loading: boolean = false;
    show: boolean = false;
    form: FormGroup;

    onSubmit(): void {
        this.loading = true;

        this.api.login(this.form.get('username').value, this.form.get('password').value)
        .subscribe(
            res => {
                this.loading = false;

                if (res['authentication'] === '1') {
                    localStorage.setItem('token', this.form.get('password').value);
                    this.auth.login();
                    this.snack.open('You\'re logged in');
                    this.router.navigate(['/dashboard/blog']);

                } else {
                    this.snack.open('Either you\'re username or password is incorrect');

                }
                
            },
            err => {
                this.loading = false;
                console.log(err);
                
            }
        );
    }

    ngOnInit() {
        this.title.setTitle('Login | Zana Daniel');

        this.form = new FormGroup({
			username: new FormControl(null, Validators.required),
			password: new FormControl(null, Validators.required)
		});

        setTimeout(() => {
            this.show = true;
        }, 250);
    }

}
