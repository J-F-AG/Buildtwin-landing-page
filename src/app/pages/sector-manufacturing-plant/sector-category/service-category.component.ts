import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manufacturing-plant-sector-category',
  templateUrl: './sector-category.component.html',
  styleUrl: './sector-category.component.scss'
})
export class ManufacturingPlantSectorCategoryComponent {
  @Input() category: number = 0;
  @Input() page: string = ''; //sector
}
