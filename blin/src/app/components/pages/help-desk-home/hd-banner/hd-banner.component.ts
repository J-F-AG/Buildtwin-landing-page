import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/GlobalService';

@Component({
  selector: 'app-hd-banner',
  templateUrl: './hd-banner.component.html',
  styleUrls: ['./hd-banner.component.scss']
})
export class HdBannerComponent {
  constructor(private globalService: GlobalService) { }
  getGlobalValue(): string {
    return this.globalService.getGlobalValue();
  }
  setGlobalValue(newValue: string): void {
    this.globalService.setGlobalValue(newValue);
  }
}
