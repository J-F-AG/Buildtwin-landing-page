import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-bim-usa-trust-by',
  // standalone: true,
  // imports: [],
  templateUrl: './trust-by.component.html',
  styleUrls: ['./trust-by.component.scss']
})
export class BimUsaTrustByNewComponent {
  constructor(public _languageService:LanguageService) { }
}
