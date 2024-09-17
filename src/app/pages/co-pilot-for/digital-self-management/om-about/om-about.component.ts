import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-om-about',
  templateUrl: './om-about.component.html',
  styleUrls: ['./om-about.component.scss']
})
export class OmAboutComponent {
  constructor(public _languageService:LanguageService,) { }
  

}
