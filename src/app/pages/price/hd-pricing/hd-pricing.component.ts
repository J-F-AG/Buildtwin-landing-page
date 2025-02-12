import { Component } from '@angular/core';

@Component({
  selector: 'app-hd-pricing',
  templateUrl: './hd-pricing.component.html',
  styleUrls: ['./hd-pricing.component.scss']
})
export class HdPricingComponent {
  marketPlace: number = 1

  marketplaceNumber(event) {
    this.marketPlace = event
  }
}
