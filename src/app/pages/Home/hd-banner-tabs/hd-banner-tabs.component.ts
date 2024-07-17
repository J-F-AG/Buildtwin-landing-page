import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-hd-banner-tabs',
  standalone: true,
  templateUrl: './hd-banner-tabs.component.html',
  styleUrl: './hd-banner-tabs.component.scss',
  imports: [MatTabsModule, MatIconModule],
})
export class HdBannerTabsComponent {

}
