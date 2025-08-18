import { Component } from '@angular/core';

@Component({
  selector: 'app-hd-pricing',
  templateUrl: './hd-pricing.component.html',
  styleUrls: ['./hd-pricing.component.scss']
})
export class HdPricingComponent {
  marketPlace: number = 1
  showPopup = false;
  marketplaceNumber(event) {
    this.marketPlace = event
  }

  call() {
    this.showPopup = true
  }

  closePopupStatus($event) {
    this.showPopup = false;
  }
}
