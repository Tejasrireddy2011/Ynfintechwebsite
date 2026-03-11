import { isPlatformBrowser } from '@angular/common';
import { Component, DOCUMENT, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  imports: [],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
 isShow!: boolean;
  topPosToStartShowing = 100;

  constructor(@Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object) {

  }

  public gotoTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll')
  checkScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPosition =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      if (scrollPosition >= this.topPosToStartShowing) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  }
}
