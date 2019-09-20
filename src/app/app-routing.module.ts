import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { PortfolioComponent } from './routes/portfolio/portfolio.component';
import { ContactComponent } from './routes/contact/contact.component';

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
		path: 'contact',
		component: ContactComponent
	}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
