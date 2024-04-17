import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/GlobalService';

@Component({
  selector: 'app-em-banner',
  templateUrl: './em-banner.component.html',
  styleUrls: ['./em-banner.component.scss']
})
export class EmBannerComponent {
  constructor(private globalService: GlobalService) { }
  getGlobalValue(): string {
    return this.globalService.getGlobalValue();
  }
  setGlobalValue(newValue: string): void {
    this.globalService.setGlobalValue(newValue);
  }
}
