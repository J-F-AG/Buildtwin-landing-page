import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commercial-building-sector-category',
  templateUrl: './sector-category.component.html',
  styleUrl: './sector-category.component.scss'
})
export class CommercialBuildingSectorCategoryComponent {
  @Input() category: number = 0;
  @Input() page: string = ''; //sector
}
