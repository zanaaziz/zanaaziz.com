import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { PortfolioComponent } from './routes/portfolio/portfolio.component';
import { ContactComponent } from './routes/contact/contact.component';
import { BlogComponent } from './routes/blog/blog.component';
import { BlogPostComponent } from './routes/blog/blog-post/blog-post.component';
import { LoginComponent } from './routes/dashboard/dashboard-login/dashboard-login.component';
import { DashboardBlogComponent } from './routes/dashboard/dashboard-blog/dashboard-blog.component';
import { AuthGuard } from './shared/auth.guard';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { DashboardBlogPostComponent } from './routes/dashboard/dashboard-blog/dashboard-blog-post/dashboard-blog-post.component';

const routes: Routes = [
    {
		path: '',
		component: HomeComponent
    },
    {
		path: 'about',
		component: AboutComponent
    },
    {
		path: 'portfolio',
		component: PortfolioComponent
    },
    {
		path: 'blog',
		component: BlogComponent
    },
    {
        path: 'blog/:slug',
        component: BlogPostComponent
    },
    {
		path: 'contact',
		component: ContactComponent
    },
    {
        path: 'dashboard/login',
        component: LoginComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
    {
        path: 'dashboard/blog',
        component: DashboardBlogComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard/blog/:slug',
        component: DashboardBlogPostComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
