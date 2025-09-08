import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language-change',
  templateUrl: './language-change.component.html',
  styleUrls: ['./language-change.component.scss'] // Corrected property name
})
export class LanguageChangeComponent {
  selectedLang: string = '';
  selectedLangObj: any = {};
  isBrowser: boolean;

  // English-speaking countries plus Germany with German
  northAmericaCountries = [
    { name: 'United States', language: 'English', text: 'en', lang: '/en', value: '' },
    { name: 'Canada', language: 'English', text: 'en', lang: '/en', value: '' }
  ];

  asiaPacificCountries = [
    { name: 'India', language: 'English', text: 'en', lang: '/en', value: '' },
    { name: 'Hong Kong', language: 'English', text: 'en', lang: '/en', value: '' },
    { name: 'Malaysia', language: 'English', text: 'en', lang: '/en', value: '' },
    { name: 'Singapore', language: 'English', text: 'en', lang: '/en', value: '' },
    { name: 'Australia', language: 'English', text: 'en', lang: '/en', value: '' },
    { name: 'New Zealand', language: 'English', text: 'en', lang: '/en', value: '' }
  ];

  europeCountries = [
    { name: 'Ireland', language: 'English', text: 'en', lang: '/en', value: '' },
    { name: 'United Kingdom', language: 'English', text: 'en', lang: '/en', value: '' },
    { name: 'Germany', language: 'German', text: 'de', lang: '/de', value: '/de' }
  ];

  middleEastCountries = [
    { name: 'UAE', language: 'English', text: 'en', lang: '/en', value: '' },
    { name: 'Saudi Arabia', language: 'English', text: 'en', lang: '/en', value: '' },
    { name: 'Jordan', language: 'English', text: 'en', lang: '/en', value: '' },
    { name: 'Qatar', language: 'English', text: 'en', lang: '/en', value: '' }
  ];

  constructor(
    public _languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID to check if in the browser
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      // Ensure the code runs only in the browser
      // this.selectedLangObj = this._languageService.language.filter((ele) => {
      //   return ele.value === this._languageService.currentLanguage;
      // });
      // this.selectedLang = this.selectedLangObj.length ? this.selectedLangObj[0].text : 'en';
      let selectedLangLocalize = window['Localize'].getLanguage();
      this.selectedLang = selectedLangLocalize;
      // console.log(selectedLangLocalize)
    }
  }

  selecteLanguage(lang: any) {
    if (this.selectedLang !== lang.text && this.isBrowser) {
      this.selectedLang = lang.text;
      this._languageService.checkAndSwitchVersion(window.location.href, this.selectedLang);
    }
  }
}
