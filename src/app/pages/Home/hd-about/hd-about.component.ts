import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-hd-about',
  templateUrl: './hd-about.component.html',
  styleUrls: ['./hd-about.component.scss']
})
export class HdAboutComponent {
  constructor(public _languageService:LanguageService) { }
}
