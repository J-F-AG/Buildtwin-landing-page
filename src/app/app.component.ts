import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import * as AOS from "aos";
import { LanguageService } from './services/language.service';
import { BreadcrumbService } from './services/breadcrumb.service';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent {

    title = 'BuildTwin - the hub for engineering AI software, projects and training';

    location: any;
    routerSubscription: any;
    breadcrumbs: any[] = [];
    constructor(
        private breadcrumbService: BreadcrumbService,
        private _languageService:LanguageService,
        private renderer: Renderer2,
        public router: Router
    ) {
        // Directly assign the breadcrumbs array from the service
        localStorage.setItem("appVersion","0.0.12")
        AOS.init();
    }

    ngOnInit() {
        this.recallJsFuntions();
    }

    recallJsFuntions() {
        this.routerSubscription = this.router.events
            .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
            .subscribe(event => {
                this._languageService.setCanonicalURL();
                this._languageService.setLanguageTags();
                this.breadcrumbService.generateBreadcrumbs(this.router.url);
                this.breadcrumbs = this.breadcrumbService.breadcrumbs;
                let url = this.router.url;
                this.injectBreadcrumbScript(url);
                console.log(event)
                this.location = this.router.url;

                this._languageService.getLanguage(this.location);

                if (!(event instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            });
    }

// Dynamically inject breadcrumb schema script if breadcrumbs are present
injectBreadcrumbScript(url) {
    // First, remove all existing breadcrumb scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => {
        this.renderer.removeChild(document.head, script);
    });

    // Check if breadcrumbs array has items
    if (this.breadcrumbs.length > 0) {
      const jsonLdScriptTag = this.renderer.createElement('script');
      jsonLdScriptTag.type = 'application/ld+json';
      
      const breadcrumbSchema = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        "itemListElement": this.breadcrumbs
      };
      
      // Add breadcrumb JSON to script tag
      jsonLdScriptTag.text = JSON.stringify(breadcrumbSchema);
      
      // Append new script to head
      this.renderer.appendChild(document.head, jsonLdScriptTag);
    }
    if(url == '/provide-service'){
        this._languageService.injectFaqSchema(this.renderer);
    }else if(url == '/marketplace'){
        this._languageService.injectForMarketplaceSchema(this.renderer);
    }else if(url == '/AI-project-management'){
        this._languageService.injectForAIProjectManagementSchema(this.renderer);
    }else if(url == '/faq'){
        this._languageService.injectFAQSchemaForFaqPage(this.renderer)
    }
  }
   
}
