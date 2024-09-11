import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
   language = [{ lang: "/en", "value": "en" }, { lang: "/de", value: "de" }]
   currentLanguage ='en';
  constructor(
    private metaService: Meta, private titleService: Title, private router: Router
  ) {

    this.currentLanguage=window['Localize'].getLanguage()
   }


  getLanguage(url) {
   

    let languageFound = undefined;
    this.language.forEach((ele) => {
        console.log(url.includes(ele.lang), ele);
        if(url.includes(ele.lang)){
            languageFound=ele
        }
       
    })

    if(languageFound && languageFound.value){
      try{
        window['Localize'].setLanguage(languageFound.value);
      }catch(E){
        console.log(E)
      }

        this.currentLanguage=languageFound.value;
    }
    console.log(url,languageFound, "language")

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
}
