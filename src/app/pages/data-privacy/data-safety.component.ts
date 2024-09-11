import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-data-privacy',
  templateUrl: './data-privacy.component.html',
  styleUrl: './data-privacy.component.scss'
})
export class DataPrivacyComponent {
  constructor(public _languageService:LanguageService) {}
}
