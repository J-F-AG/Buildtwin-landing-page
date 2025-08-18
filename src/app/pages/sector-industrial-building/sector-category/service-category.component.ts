import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-industrial-building-sector-category',
  templateUrl: './sector-category.component.html',
  styleUrl: './sector-category.component.scss'
})
export class IndustrialBuildingSectorCategoryComponent {
  @Input() category: number = 0;
  @Input() page: string = ''; //sector
}
