import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectListService {
  constructor(private _http: HttpClient, private _languageService: LanguageService) {}

}
