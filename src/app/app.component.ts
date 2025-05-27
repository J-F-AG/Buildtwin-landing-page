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
import { Injector } from '@angular/core';
import { ServiceMappingService } from './services/service-mapping.service';
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
    langHtml: SafeHtml;
    schemaCode: SafeHtml;
    faqSchemaHtml: SafeHtml;
    serviceSchemaHtml: SafeHtml;
    testimonialSchemaHtml: SafeHtml;
    showHideForm:boolean = false;
    hideSideButton: boolean = true;
    hideOnThisUrl: string[] = ['/partners', '/services', '/software', '/building-code','/sector'];
    constructor(
        private breadcrumbService: BreadcrumbService,
        private _languageService:LanguageService,
        private renderer: Renderer2,
        public router: Router,
        private _seoService: SeoService,
        private activatedRoute: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private injector: Injector,
        @Inject(PLATFORM_ID) private platformId: Object // Inject platform ID
    ) {
      try {
        localStorage.setItem('version','0.0.1')
      } catch (error) {
        
      }
      this._languageService.faqSchemaSubject.subscribe((data) => {
        const faqSchema = this.injectFaqSchema(data['data']);
        this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
          `<script type="application/ld+json">${faqSchema}</script>`
        );
      });
        // Directly assign the breadcrumbs array from the service
        if (isPlatformBrowser(this.platformId)) {
            try {
              localStorage.setItem("appVersion", "0.0.12");
            } catch (error) {
              
            }
        }
        // AOS.init();
    }

    toggleSideForm() {
      this.showHideForm = !this.showHideForm;
    }

    ngOnInit() {

      // Reset all schema HTML variables at the beginning
    this.breadcrumbSchemaHtml = this.sanitizer.bypassSecurityTrustHtml('');
    this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml('');
    this.schemaCode = this.sanitizer.bypassSecurityTrustHtml('');
    this.testimonialSchemaHtml = this.sanitizer.bypassSecurityTrustHtml('');
    this.serviceSchemaHtml = this.sanitizer.bypassSecurityTrustHtml('');


        if (isPlatformBrowser(this.platformId)) {
        try {
          localStorage.setItem('appVerionId', '0.0.2');
        } catch (error) {
          
        }
        }
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
            let url = this.router.url
            if(url.includes('#')){
              url = url.split('#')[0];
            }
            if(event['title']){
                this._seoService.updateTitle(event['title']);
                this._seoService.updateDescription(event['description']);
                // Update OG tags
                this._seoService.updateOGUrl(url);
                this._seoService.updateOGImage(event['image']);

                // Update Twitter card tags
                this._seoService.updateTwitterCardType('summary_large_image');
                this._seoService.updateTwitterImage(event['image']);
                this._seoService.setCanonicalURL(event['canonical'], this.renderer);
                this._seoService.setLanguageTags(event['canonical'], this.renderer);
            }
            if(event['canonical']){
            }
            // let url = this.router.url;
            // this._languageService.setLanguageTags(url);
            // this.injectLang();
            this.breadcrumbService.generateBreadcrumbs(url);
            this.breadcrumbs = this.breadcrumbService.breadcrumbs;
            this.injectBreadcrumbScript(url);
            console.log(event)

            this.checkUrl(this.router.url);
        })
    }

    checkUrl(url: string): void {
      this.hideSideButton = !this.hideOnThisUrl.some(path => url.includes(path));
    }

  injectFaqSchema(data) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": []
    };
    data.filter((a, i) => {
      let obj = {
        "@type": "Question", 
        "name": a['Question'], 
        "acceptedAnswer": { 
          "@type": "Answer", 
          "text": a['Answer'] 
        } 
      }
      faqSchema['mainEntity'].push(obj)
    });
    return JSON.stringify(faqSchema);
    // Create the JSON-LD script tag
    // const jsonLdScriptTag = renderer.createElement('script');
    // jsonLdScriptTag.type = 'application/ld+json';
    // jsonLdScriptTag.text = JSON.stringify(faqSchema);
    // // Append the script tag to the document head
    // renderer.appendChild(document.head, jsonLdScriptTag);
  }
    injectLang(){
      try {
        const existingScripts = document.querySelectorAll('link[rel="alternate"]');
        existingScripts.forEach(script => {
            this.langHtml = this.sanitizer.bypassSecurityTrustHtml('');
        });
      } catch (error) {
          
      }
       // Build new language tags
      let langHtmlCommon = '';
      this._languageService.setLanguageTagsObj.forEach(element => {
        langHtmlCommon += `<link rel="alternate" hreflang="${element.hreflang}" href="${element.href}" />`;
      });
      // Sanitize and update innerHTML
      this.langHtml = this.sanitizer.bypassSecurityTrustHtml(langHtmlCommon);
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
            this.schemaCode = this.sanitizer.bypassSecurityTrustHtml('');
        });
    } catch (error) {
        
    }

    // Check if breadcrumbs array has items
    if (this.breadcrumbs.length > 0 && url !== '/') {
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
    if(this.router.url === '/'){
      const faqSchema = this._languageService.injectSchemaCodeForHomePage(this.renderer);
      this.schemaCode = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

      const testimonialSchema = this._languageService.injectTestimonialSchemaForHomePage(this.renderer);
      this.testimonialSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${testimonialSchema}</script>`
      );
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

      const testimonialSchema = this._languageService.injectForMarketplaceTestimonialSchema(this.renderer);

      this.testimonialSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${testimonialSchema}</script>`
      );

    }else if(url.includes('/ai-project-management')){
        const faqSchema = this._languageService.injectForAIProjectManagementSchema(this.renderer);

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );


      const serviceSchema = this._languageService.injectForAIProjectManagementServiceSchema(this.renderer);

      this.serviceSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${serviceSchema}</script>`
      );

      const testimonialSchema = this._languageService.injectForAIProjectManagementTestimonialSchema(this.renderer);

      this.testimonialSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${testimonialSchema}</script>`
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
    }else if(url.includes('/services/steel-detailing-services-in-usa')){
      const faqSchema = this._languageService.injectFAQSchemaForSteelUSAServiceProvider(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
    }else if(url.includes('/services/bim-outsourcing-services-in-usa')){
      const faqSchema = this._languageService.injectFAQSchemaForBimServiceProvider(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
    }else if(url.includes('/steel-detailing-services')){
        const faqSchema = this._languageService.injectFAQSchemaForSteelDetailingServices(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
    }else if(url.includes('/rebar-detailing-services')){
        const faqSchema = this._languageService.injectFAQSchemaForRebarDetailingServices(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
    }else if(url.includes('/bim-services')){
        const faqSchema = this._languageService.injectFAQSchemaForBimServices(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
    }else if(url.includes('/cad-services')){
      const faqSchema = this._languageService.injectFAQSchemaForCADServices(this.renderer)

    this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
      `<script type="application/ld+json">${faqSchema}</script>`
    );
  }else if(url.includes('/services/bim-outsourcing-services-in-usa')){
      const faqSchema = this._languageService.injectFAQSchemaForBimServiceProvider(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
    }else if(url.includes('/sector/data-centre')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorDataCenter(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

      const serviceSchema = this._languageService.injectServiceSchemaForSectorDataCenter(this.renderer);

      this.serviceSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${serviceSchema}</script>`
      );
      const testimonialSchema = this._languageService.injectSectorDataCenterTestimonialSchema(this.renderer);

      this.testimonialSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${testimonialSchema}</script>`
      );
    }else if(url.includes('/building-code/aisc')){
      const faqSchema = this._languageService.injectFAQSchemaForBuildingCodeAisc(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
    }else if(url.includes('/building-code/eurocode')){
      const faqSchema = this._languageService.injectFAQSchemaForBuildingCodeEuro(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
    }else if(url.includes('/building-code/british-standards')){
      const faqSchema = this._languageService.injectFAQSchemaForBuildingCodeBS(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
    }else if(url.includes('/building-code/australian-standards')){
      const faqSchema = this._languageService.injectFAQSchemaForBuildingCodeAS(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
    }else if(url.includes('/building-code/iso-standards')){
      const faqSchema = this._languageService.injectFAQSchemaForBuildingCodeISO(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
    }else if(url.includes('/sector/powerplant')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorPowerPlant(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

      const testimonialSchema = this._languageService.injectSectorPowerPlantTestimonialSchema(this.renderer);

      this.testimonialSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${testimonialSchema}</script>`
      );

    }else if(url.includes('/sector/bridge')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorBridge(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

    }else if(url.includes('/sector/stadium')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorStadium(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

    }else if(url.includes('/sector/roads')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorRoads(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

    }else if(url.includes('/sector/water-and-waste')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorWaterAndWaste(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

    }else if(url.includes('/sector/hospital')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorHospital(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

    }else if(url.includes('/sector/manufacturing-plant')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorManufacturingPlant(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

    }else if(url.includes('/sector/theaters')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorTheaters(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

    }else if(url.includes('/sector/commercial-building')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorCommercialBuilding(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

    }else if(url.includes('/sector/industrial-building')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorIndustrialBuilding(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

    }else if(url.includes('/sector/residential-building')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorResidentialBuilding(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

    }else if(url.includes('/sector/chemical-plant')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorChemicalPlant(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

    }else if(url.includes('/sector/schools')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorSchools(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

    }else if(url.includes('/sector/airports')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorAirports(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

    }else if(url.includes('/sector/tunnels')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorTunnels(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

    }else if(url.includes('/sector/metro')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorMetro(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

    }else if(url.includes('/sector/defense')){
      const faqSchema = this._languageService.injectFAQSchemaForSectorDefense(this.renderer)

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

    }else if(url.includes('/software/architecture-design-services')){
      const faqSchema = this._languageService.injectForArchitecturalDesignServicesSchema(this.renderer);

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );
      const serviceSchema = this._languageService.injectForArchitecturalDesignServicesSchema(this.renderer);

      this.serviceSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${serviceSchema}</script>`
      );

      const testimonialSchema = this._languageService.injectArchitecturalDesignServicesTestimonialSchema(this.renderer);

      this.testimonialSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${testimonialSchema}</script>`
      );
    }else if(url.includes('/software/structural-steel-detailing')){
      const faqSchema = this._languageService.injectForStructuralSteelDetailingSchema(this.renderer);

      this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${faqSchema}</script>`
      );

      const testimonialSchema = this._languageService.injectStructuralSteelDetailingTestimonialSchema(this.renderer);

      this.testimonialSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
        `<script type="application/ld+json">${testimonialSchema}</script>`
      );
    }

    else {
      // Check if this URL corresponds to a service page in your service mapping
      let normalizedUrl = url.replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes
      
      console.log("normalized url to check for service page schema injection :", normalizedUrl);
      
      // Import and inject your ServiceMappingService
      const serviceMappingService = this.injector.get(ServiceMappingService);
      
      // Get service data for the current URL
      serviceMappingService.getServicePageDataByUrl(normalizedUrl).subscribe(
        response => {
          if (response && response.data && response.data[0]) {
            const serviceData = response.data[0];
            
            // Check if service has FAQ schema data
            if (serviceData.faq_and_testimonial_schemas) {
              const schemas = serviceData.faq_and_testimonial_schemas;
              
              // Handle FAQ schema
              if (schemas.faq) {
                this.faqSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
                  `<script type="application/ld+json">${JSON.stringify(schemas.faq)}</script>`
                );
              }
              
              // Handle testimonial schema
              if (schemas.testimonial) {
                this.testimonialSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
                  `<script type="application/ld+json">${JSON.stringify(schemas.testimonial)}</script>`
                );
              }
              
              // Handle service schema
              // if (schemas.service) {
              //   this.serviceSchemaHtml = this.sanitizer.bypassSecurityTrustHtml(
              //     `<script type="application/ld+json">${JSON.stringify(schemas.service)}</script>`
              //   );
              // }
            }
          }
        },
        error => {
          console.error('Error fetching service data for schema injection:', error);
        }
      );
    }

  }
   
}
