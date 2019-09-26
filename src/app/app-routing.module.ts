import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { PortfolioComponent } from './routes/portfolio/portfolio.component';
import { ContactComponent } from './routes/contact/contact.component';
import { BlogComponent } from './routes/blog/blog.component';

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
		path: 'contact',
		component: ContactComponent
	}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
