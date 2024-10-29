import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-rebar-trust-by',
  // standalone: true,
  // imports: [],
  templateUrl: './trust-by.component.html',
  styleUrl: './trust-by.component.scss'
})
export class RebarTrustByNewComponent {
  constructor(public _languageService:LanguageService) { }
}
