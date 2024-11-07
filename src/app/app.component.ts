import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter, map, mergeMap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
// import * as AOS from "aos";
import { LanguageService } from './services/language.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { SeoService } from './services/seo.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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

    // title = 'BuildTwin - the hub for engineering AI software, projects and training';

    location: any;
    routerSubscription: any;
    breadcrumbs: any[] = [];
    breadcrumbSchemaHtml: SafeHtml;
    faqSchemaHtml: SafeHtml;
    constructor(
        private breadcrumbService: BreadcrumbService,
        private _languageService:LanguageService,
        private renderer: Renderer2,
        public router: Router,
        private _seoService: SeoService,
        private activatedRoute: ActivatedRoute,
        private sanitizer: DomSanitizer,
        @Inject(PLATFORM_ID) private platformId: Object // Inject platform ID
    ) {
        // Directly assign the breadcrumbs array from the service
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem("appVersion", "0.0.12");
        }
        // AOS.init();
    }

    ngOnInit() {
        this.recallJsFuntions();

    this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
        .subscribe((event) => {
            if(event['title']){
                this._seoService.updateTitle(event['title']);
                this._seoService.updateDescription(event['description']);
                // Update OG tags
                this._seoService.updateOGUrl(this.router.url);
                this._seoService.updateOGImage(event['image']);

                // Update Twitter card tags
                this._seoService.updateTwitterCardType('summary_large_image');
                this._seoService.updateTwitterImage(event['image']);
                this._seoService.setCanonicalURL(event['canonical']);
            }
            if(event['canonical']){
            }
            
            this._languageService.setLanguageTags();
            this.breadcrumbService.generateBreadcrumbs(this.router.url);
            this.breadcrumbs = this.breadcrumbService.breadcrumbs;
            let url = this.router.url;
            this.injectBreadcrumbScript(url);
            console.log(event)
        })
    }
    recallJsFuntions() {
        this.routerSubscription = this.router.events
            .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
            .subscribe((event:any) => {
                const urlEn = event.urlAfterRedirects;

                // Check if the URL starts with '/en/' and redirect to the same URL without '/en/'
                if (urlEn.startsWith('/en/')) {
                    const newUrl = urlEn.replace('/en/', '/');
                    this.router.navigateByUrl(newUrl);
                }
                this.location = this.router.url;

                // this._languageService.getLanguage(this.location);

                if (!(event instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            });
    }

// Dynamically inject breadcrumb schema script if breadcrumbs are present
injectBreadcrumbScript(url) {
    // First, remove all existing breadcrumb scripts
    try {
        const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
        existingScripts.forEach(script => {
            this.breadcrumbSchemaHtml = this.sanitizer.bypassSecurityTrustHtml('');
            this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml('');
        });
    } catch (error) {
        
    }

    // Check if breadcrumbs array has items
    if (this.breadcrumbs.length > 0) {
    //   const jsonLdScriptTag = this.renderer.createElement('script');
    //   jsonLdScriptTag.type = 'application/ld+json';
      
      const breadcrumbSchema = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        "itemListElement": this.breadcrumbs
      };
      this.breadcrumbSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`
      );
      // Add breadcrumb JSON to script tag
    //   jsonLdScriptTag.text = JSON.stringify(breadcrumbSchema);
      
      // Append new script to head
    //   this.renderer.appendChild(document.head, jsonLdScriptTag);
    }
    if(url.includes('/provide-service')){
        const faqSchema = this._languageService.injectFaqSchema(this.renderer);
      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
    }else if(url.includes('/marketplace')){
        const faqSchema = this._languageService.injectForMarketplaceSchema(this.renderer);

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
    }else if(url.includes('/AI-project-management')){
        const faqSchema = this._languageService.injectForAIProjectManagementSchema(this.renderer);

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
    }else if(url.includes('/faq')){
        const faqSchema = this._languageService.injectFAQSchemaForFaqPage(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
    }else if(url.includes('/pre-cast-detailing-services')){
        const faqSchema = this._languageService.injectFAQSchemaForPreCastDetailingServices(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
    }
  }
   
}
