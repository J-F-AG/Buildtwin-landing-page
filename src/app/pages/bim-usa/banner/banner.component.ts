import { Component, OnInit, OnDestroy  } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-bim-usa-banner',
  // standalone: true,
  // imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})

export class BimUsaBannerComponent {
  cities = ['Arizona', 'New York', 'Texas', 'Pennsylvania', 'Florida', 'California'];
  currentCity: string = this.cities[0];
  private cityIndex = 0;
  private citySubscription: Subscription;

  ngOnInit(): void {
    this.citySubscription = interval(2000).subscribe(() => {
      this.cityIndex = (this.cityIndex + 1) % this.cities.length; // Loop back to the first city
      this.currentCity = this.cities[this.cityIndex];
    });
  }

  ngOnDestroy(): void {
    if (this.citySubscription) {
      this.citySubscription.unsubscribe(); // Clean up the subscription on component destroy
    }
  }
  
}
