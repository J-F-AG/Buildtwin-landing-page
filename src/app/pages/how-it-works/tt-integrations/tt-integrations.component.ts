import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-tt-integrations',
  templateUrl: './tt-integrations.component.html',
  styleUrls: ['./tt-integrations.component.scss']
})
export class TtIntegrationsComponent {
  constructor(public _languageService:LanguageService) {}
}
