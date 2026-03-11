import { Component, Inject, PLATFORM_ID, afterNextRender, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SiteHeader } from "./core-components/site-header/site-header";
import { SiteFooter } from './core-components/site-footer/site-footer';
import { HomeComponent } from "./common/home-component/home-component";
import { AboutComponent } from "./common/about-component/about-component";
import { ContactComponent } from "./common/contact-component/contact-component";
import { TeamComponent } from "./common/team-component/team-component";
import { ServicesComponent } from "./common/services-component/services-component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter, HomeComponent, AboutComponent, ContactComponent, TeamComponent, ServicesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ynfintechwebsite');

  private initAOSWithRetry(attempts: number): void {
    const aos = (window as Window & { AOS?: { init: (options?: Record<string, unknown>) => void; refreshHard: () => void } }).AOS;
    if (aos) {
      aos.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });

      setTimeout(() => aos.refreshHard(), 0);
      return;
    }

    if (attempts > 0) {
      setTimeout(() => this.initAOSWithRetry(attempts - 1), 100);
    }
  }

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    if (!isPlatformBrowser(platformId)) {
      return;
    }

    afterNextRender(() => {
      this.initAOSWithRetry(20);
    });
  }
}
