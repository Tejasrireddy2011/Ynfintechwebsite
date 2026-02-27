import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeader } from "./core-components/site-header/site-header";
import { SiteFooter } from './core-components/site-footer/site-footer';
import { HomeComponent } from "./common/home-component/home-component";
import { ContactComponent } from "./common/contact-component/contact-component";
import { PortfolioComponent } from "./common/portfolio-component/portfolio-component";
import { DropdownComponent } from "./common/dropdown-component/dropdown-component";
import { ServicesComponent } from "./common/services-component/services-component";
import { TeamComponent } from "./common/team-component/team-component";
import { AboutComponent } from "./common/about-component/about-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter, HomeComponent, ContactComponent, PortfolioComponent, DropdownComponent, ServicesComponent, TeamComponent, AboutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ynfintechwebsite');
}
