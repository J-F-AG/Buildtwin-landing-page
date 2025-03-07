import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-residential-building-sector-category',
  templateUrl: './sector-category.component.html',
  styleUrl: './sector-category.component.scss'
})
export class ResidentialBuildingSectorCategoryComponent {
  @Input() category: number = 0;
  @Input() page: string = ''; //sector
}
