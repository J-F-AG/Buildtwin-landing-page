import { Component, Input, OnInit } from '@angular/core';

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
  window: any = window;
  @Input() toolTip: string = '';
  constructor() { }
  get iconUrl() {
    return `${this.window.location.href}#${this.name!}`;
  }

}
