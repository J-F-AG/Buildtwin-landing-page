// global.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  globalValue: string = '5.000';
  payload:any;
  constructor(private http: HttpClient) {}


  getGlobalValue(): string {
    return this.globalValue;
  }

  setGlobalValue(value: string): void {
    this.globalValue = value;
  }
  public saveUser(payload:any){
   
    const url = 'https://fxb5vcoax1.execute-api.ap-southeast-1.amazonaws.com/production/onboarding/save-customer-type';
    return this.http.post<any>(url,payload);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.scrollY - 100;
      // element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  }
}