import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
   language = [{ lang: "/en", "value": "en" }, { lang: "/de", value: "de" }]
   currentLanguage ='en';
  constructor() {

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
        window['Localize'].setLanguage(languageFound.value);

        this.currentLanguage=languageFound.value;
    }
    console.log(url,languageFound, "language")

}
}
