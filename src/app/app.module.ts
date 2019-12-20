import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule,
    MatMenuModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule
} from "@angular/material";

import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { PortfolioComponent } from './routes/portfolio/portfolio.component';
import { ContactComponent } from './routes/contact/contact.component';
import { NavigationComponent, LogoutConfirmDialogModel } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './routes/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogPostComponent } from './routes/blog/blog-post/blog-post.component';
import { NgxMdModule } from 'ngx-md';
import { LoginComponent } from './routes/dashboard/dashboard-login/dashboard-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardBlogComponent, DeleteConfirmDialogModel } from './routes/dashboard/dashboard-blog/dashboard-blog.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { DashboardBlogPostComponent } from './routes/dashboard/dashboard-blog/dashboard-blog-post/dashboard-blog-post.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        PortfolioComponent,
        ContactComponent,
        NavigationComponent,
        FooterComponent,
        BlogComponent,
        BlogPostComponent,
        LoginComponent,
        DashboardBlogComponent,
        PageNotFoundComponent,
        DashboardBlogPostComponent,
        DeleteConfirmDialogModel,
        LogoutConfirmDialogModel
    ],
    entryComponents: [
        DeleteConfirmDialogModel,
        LogoutConfirmDialogModel
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
		ReactiveFormsModule,
        NgxMdModule.forRoot(),
        MatIconModule,
        MatButtonModule,
        LayoutModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatMenuModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatTableModule,
        MatSortModule,
        MatDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
