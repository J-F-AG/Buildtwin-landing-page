import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }
  buildLinking(companyName: string) {
    return companyName
      .replace(/[\s&.]/g, '-')
      .replace(/-{2,}/g, '-')
      .replace(/-$/, '') // remove trailing hyphen
      .toLowerCase();
  }
}
