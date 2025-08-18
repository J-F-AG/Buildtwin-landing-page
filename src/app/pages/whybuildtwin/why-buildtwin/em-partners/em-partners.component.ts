import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-em-partners',
  templateUrl: './em-partners.component.html',
  styleUrls: ['./em-partners.component.scss']
})
export class EmPartnersComponent {
  constructor(public _languageService:LanguageService) { }
}
