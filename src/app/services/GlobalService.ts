// global.service.ts
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  globalValue: string = '5.000';
  payload:any;
  constructor(private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}


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
    if(sectionId === 'formContainer'){
      this.triggerSidebarToggle();
    }
  }
  triggerSidebarToggle(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Ensure the code is only executed in the browser
      const sidebarToggleButton = document.querySelector('.toggle-sidebar') as HTMLElement;
      if (sidebarToggleButton) {
        sidebarToggleButton.click(); // Safely call click() after typecasting
      }
    }
  }
}