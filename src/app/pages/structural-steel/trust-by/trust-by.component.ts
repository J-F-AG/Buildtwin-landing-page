import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-structural-steel-trust-by',
  // standalone: true,
  // imports: [],
  templateUrl: './trust-by.component.html',
  styleUrls: ['../../bim/trust-by/trust-by.component.scss','./trust-by.component.scss']
})
export class StructuralSteelTrustByNewComponent {
  constructor(public _languageService:LanguageService) { }
}
