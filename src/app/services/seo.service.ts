import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private metaService: Meta) { }

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


  setCanonicalURL(url: string) {
    // Correctly select the canonical tag using the 'link[rel="canonical"]' selector
  // const existingCanonical = this.metaService.getTag('link[rel="canonical"]');

  // // If the canonical tag exists, remove it
  // if (existingCanonical) {
  //   this.metaService.removeTag('link[rel="canonical"]');
  // }

  // Add the new canonical tag
  this.metaService.addTag({ rel: 'canonical', href: url });
  }

}