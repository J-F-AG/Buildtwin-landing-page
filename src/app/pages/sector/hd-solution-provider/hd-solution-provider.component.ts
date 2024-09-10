import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-sector-solution-provider',
  templateUrl: './hd-solution-provider.component.html',
  styleUrl: './hd-solution-provider.component.scss'
})
export class sectorSolutionProviderComponent {
  constructor(public _languageService:LanguageService) { }
}
