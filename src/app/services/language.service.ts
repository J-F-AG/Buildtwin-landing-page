import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language = [{ lang: "/en", "value": "/", text: 'en' }, { lang: "/de", value: "/de", text: 'de' }]
  currentLanguage = '/';
  constructor(
    private metaService: Meta, private titleService: Title, private router: Router
  ) {
    let localLanng = window['Localize'].getLanguage()
    if (localLanng == 'en') {
      localLanng = '/'
    }
    this.currentLanguage = localLanng
  }


  getLanguage(url) {


    let languageFound = undefined;
    this.language.forEach((ele) => {
      console.log(url.includes(ele.lang), ele);
      if (url.includes(ele.lang)) {
        languageFound = ele
      }

    })

    if (languageFound && languageFound.value) {
      try {
        window['Localize'].setLanguage(languageFound.value);
      } catch (E) {
        console.log(E)
      }

      this.currentLanguage = languageFound.value;
    }
    console.log(url, languageFound, "language")

  }

  setCanonicalURL() {
    const url = this.router.url;
    const currentUrl = window.location.href; // Get the full URL
    const urlObj = new URL(currentUrl);      // Create a URL object
    const baseUrl = `${urlObj.protocol}//${urlObj.hostname}`;

    let link: HTMLLinkElement = document.querySelector(`link[rel='canonical']`) || null;
    if (link) {
      link.href = baseUrl + url;
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', baseUrl + url);
      document.head.appendChild(link);
    }
  }

  setLanguageTags() {
    const currentUrl = window.location.href; // Get the full URL
    const urlObj = new URL(currentUrl);      // Create a URL object
    const baseUrl = `${urlObj.protocol}//${urlObj.hostname}`;
    const url = this.router.url;
    const fullUrl = baseUrl + url;

    // Define language tags
    const languageTags = [
      { href: `${fullUrl}`, hreflang: 'en' },
      { href: `${fullUrl}`, hreflang: 'de' },
      // { href: `${fullUrl}`, hreflang: 'en-in' },
      // { href: `${fullUrl}`, hreflang: 'en-us' },
      // { href: `${fullUrl}`, hreflang: 'en-gb' },
      // { href: `${fullUrl}`, hreflang: 'de-de' }
    ];

    // Remove existing alternate links
    // const body = document.querySelector('body');
    document.querySelectorAll('link[rel="alternate"]').forEach(link => link.remove());

    // Add new alternate links for each language
    languageTags.forEach(tag => {
      const link: HTMLLinkElement = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('href', tag.href);
      link.setAttribute('hreflang', tag.hreflang);
      document.body.prepend(link);
    });
  }

  checkAndSwitchVersion(currentUrl: string, lang: string): void {
    const url = new URL(currentUrl);

    // Use a regex to check if the path starts with "/de" followed by either end of string or a slash (to ensure "/de" is a standalone segment)
    // const isDeVersion = /^\/de(\/|$)/.test(url.pathname);

    if (lang === 'en') {
      // If the URL starts with '/de', switch to the version without '/de'
      const newPath = url.pathname.replace(/^\/de/, ''); // Remove only the leading '/de'
      const newUrl = `${url.origin}${newPath}${url.search}${url.hash}`;
      window.location.href = newUrl;
    } else {
      // If the URL does not start with '/de', add '/de' at the beginning of the path
      const newPath = `/de${url.pathname}`;
      const newUrl = `${url.origin}${newPath}${url.search}${url.hash}`;
      window.location.href = newUrl;
    }
  }
}
