import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-om-partners',
  templateUrl: './om-partners.component.html',
  styleUrls: ['./om-partners.component.scss']
})
export class OmPartnersComponent {
  constructor(public _languageService:LanguageService) {}
}
