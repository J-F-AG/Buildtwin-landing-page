import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sector-category',
  templateUrl: './sector-category.component.html',
  styleUrl: './sector-category.component.scss'
})
export class SectorCategoryComponent {
  @Input() category: number = 0;
  @Input() page: string = ''; //sector
}
