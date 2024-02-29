// global.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  globalValue: string = '2.000';
  payload:any;
  constructor(private http: HttpClient) {}


  getGlobalValue(): string {
    return this.globalValue;
  }

  setGlobalValue(value: string): void {
    this.globalValue = value;
  }
  public saveUser(payload:any){
   
    const url = 'https://6ev8zqp6l6.execute-api.eu-central-1.amazonaws.com/V1/onboarding/save-customer-type';
    return this.http.post<any>(url,payload);
  }
}