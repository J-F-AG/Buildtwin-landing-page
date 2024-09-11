import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-elearning-about',
  templateUrl: './elearning-about.component.html',
  styleUrls: ['./elearning-about.component.scss']
})
export class ElearningAboutComponent implements OnInit {

  constructor(public _languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
