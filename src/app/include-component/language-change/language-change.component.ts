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
