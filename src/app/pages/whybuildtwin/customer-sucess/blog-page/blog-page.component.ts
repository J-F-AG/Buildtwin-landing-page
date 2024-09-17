import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent {

    title = 'BuildTwin - use cases';
 
    constructor(private titleService:Title, public _languageService:LanguageService, private router: Router, private viewportScroller: ViewportScroller) {

    }
    
    ngOnInit() {
        this.titleService.setTitle(this.title);
    }

    ngAfterViewInit(): void {
        this.router.events.pipe(
          filter((event): event is NavigationEnd => event instanceof NavigationEnd)
        ).subscribe((event: NavigationEnd) => {
          const fragment = this.router.url.split('#')[1];
          if (fragment) {
            setTimeout(() => {
              this.viewportScroller.scrollToAnchor(fragment);
            }, 500); // Delay to wait for content to load
          }
        });
      }

}