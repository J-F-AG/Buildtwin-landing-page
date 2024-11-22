import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private metaService: Meta, private activatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object, 
    @Inject(DOCUMENT) private doc: Document
  ) { }

  updateTitle(title: string) {
    this.title.setTitle(title);
    this.updateOGTags('og:title', title);
    this.updateTwitterTags('twitter:title', title);
  }

  updateDescription(desc: string) {
    this.metaService.updateTag({ name: 'description', content: desc })
    this.updateOGTags('og:description', desc);
    this.updateTwitterTags('twitter:description', desc);
  }


  // Update OG Tags
  updateOGTags(property: string, content: string) {
    this.metaService.updateTag({ property: property, content: content });
  }

  // Update Twitter Tags
  updateTwitterTags(name: string, content: string) {
    this.metaService.updateTag({ name: name, content: content });
  }

  // Update the OG URL
  updateOGUrl(url: string) {
    if(url.includes('partners')){
      url = url.toLowerCase();
    }
    url = 'https://www.buildtwin.com'+url
    this.metaService.updateTag({ property: 'og:url', content: url });
  }

  // Update the OG image
  updateOGImage(imageUrl: string) {
    this.metaService.updateTag({ property: 'og:image', content: imageUrl });
  }

  // Update Twitter image
  updateTwitterImage(imageUrl: string) {
    this.metaService.updateTag({ name: 'twitter:image', content: imageUrl });
  }

  // Update Twitter card type
  updateTwitterCardType(type: string) {
    this.metaService.updateTag({ name: 'twitter:card', content: type });
  }


  setCanonicalURL(url: string, renderer: any) {
    const link: HTMLLinkElement = renderer.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);

    // // Remove any existing canonical tags to avoid duplicates
    try {
      const existingLinks = this.doc.head.querySelectorAll('link[rel="canonical"]');
      existingLinks.forEach((existingLink) => renderer.removeChild(this.doc.head, existingLink));
    } catch (error) {
      
    }

    // Append the new canonical tag to the head
    renderer.appendChild(this.doc.head, link);
    // const childRoute = this.getChild(this.activatedRoute);
    // childRoute.data.subscribe(data => {
    //   const canonicalUrl = data['canonical'] || `https://www.buildtwin.com${url}`;
    //   if (isPlatformBrowser(this.platformId)) {
    //     // Only run this part in the browser
    //     this.updateCanonicalUrl(canonicalUrl);
    //   } else {
    //     // Set canonical link during SSR before page load
    //     this.metaService.updateTag({ rel: 'canonical', href: canonicalUrl });
    //   }
    // });
    // Correctly select the canonical tag using the 'link[rel="canonical"]' selector
  // const existingCanonical = this.metaService.getTag('link[rel="canonical"]');

  // // If the canonical tag exists, remove it
  // if (existingCanonical) {
  //   this.metaService.removeTag('link[rel="canonical"]');
  // }
  // Correctly select the canonical tag using the 'link[rel="canonical"]' selector
    // const existingCanonical = this.metaService.getTag("meta[rel='canonical']");
  
    // // If the canonical tag exists, remove it
  //   try {
  //     this.removeCanonicalURL()
  //   } catch (error) {
      
  //   }
  //   if(url.includes('partners')){
  //     url = url.toLowerCase();
  //   }
  // // Add the new canonical tag
  // this.metaService.addTag({ rel: 'canonical', href: url });
  }
  getChild(route: ActivatedRoute): ActivatedRoute {
    if (route.firstChild) {
      return this.getChild(route.firstChild);
    } else {
      return route;
    }
  }
  updateCanonicalUrl(url: string) {
    const existingLink = document.querySelector('link[rel="canonical"]');
    if (existingLink) {
      existingLink.setAttribute('href', url);
    } else {
      const link: HTMLLinkElement = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  }
  removeCanonicalURL() {
try {
  
  const metaCanonical = document.querySelector('meta[rel="canonical"]');


  if (metaCanonical) {
    metaCanonical.remove();    
  }
} catch (error) {
  
}
  }

}