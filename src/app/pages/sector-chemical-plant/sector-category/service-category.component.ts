import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chemical-plant-sector-category',
  templateUrl: './sector-category.component.html',
  styleUrl: './sector-category.component.scss'
})
export class ChemicalPlantSectorCategoryComponent {
  @Input() category: number = 0;
  @Input() page: string = ''; //sector
}
