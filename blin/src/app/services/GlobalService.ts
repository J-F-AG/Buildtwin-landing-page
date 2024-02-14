// global.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  globalValue: string = '2.000';

  constructor() { }

  getGlobalValue(): string {
    return this.globalValue;
  }

  setGlobalValue(value: string): void {
    this.globalValue = value;
  }
}