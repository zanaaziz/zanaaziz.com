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
    MatProgressSpinnerModule
} from "@angular/material";

import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { PortfolioComponent } from './routes/portfolio/portfolio.component';
import { ContactComponent } from './routes/contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './routes/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogPostComponent } from './routes/blog/blog-post/blog-post.component';
import { NgxMdModule } from 'ngx-md';

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
        BlogPostComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxMdModule.forRoot(),
        MatIconModule,
        MatButtonModule,
        LayoutModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatMenuModule,
        MatTooltipModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
