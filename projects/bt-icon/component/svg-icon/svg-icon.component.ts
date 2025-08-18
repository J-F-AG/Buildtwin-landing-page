import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'lib-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.css']
})
export class SvgIconComponent {
  @Input() name: string = '';
  @Input() size = 16;
  @Input() sizeH = 16;
  @Input() fill = 'currentColor';
  @Input() toolTip: string = '';

  private isBrowser: boolean;
  private _window: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Check if the code is running in the browser
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this._window = window;
    }
  }

  get iconUrl() {
    if (this.isBrowser) {
      return `${this._window.location.href}#${this.name}`;
    }
    return ''; // Fallback for SSR, no window available
  }
}
