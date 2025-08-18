import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bridge-sector-category',
  templateUrl: './sector-category.component.html',
  styleUrl: './sector-category.component.scss'
})
export class BridgeSectorCategoryComponent {
  @Input() category: number = 0;
  @Input() page: string = ''; //sector
}
