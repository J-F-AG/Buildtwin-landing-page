import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-language-change',
  templateUrl: './language-change.component.html',
  styleUrl: './language-change.component.scss'
})
export class LanguageChangeComponent {
  selectedLang: any = 'en'
  selectedLangObj: any = {}
  constructor(
    public _languageService:LanguageService
  ) { }

  ngOnInit() {
    this.selectedLangObj = this._languageService.language.filter((ele) => {
      return ele.value == this._languageService.currentLanguage
    })
    this.selectedLang = this.selectedLangObj[0].text
  }

  selecteLanguage(lang) {
    if(this.selectedLang !== lang.text){
      this.selectedLang = lang.text
      this._languageService.checkAndSwitchVersion(window.location.href, this.selectedLang)
    }
  }
}
