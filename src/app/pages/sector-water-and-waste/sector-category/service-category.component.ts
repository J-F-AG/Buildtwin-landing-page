import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-water-and-waste-sector-category',
  templateUrl: './sector-category.component.html',
  styleUrl: './sector-category.component.scss'
})
export class WaterAndWasteSectorCategoryComponent {
  @Input() category: number = 0;
  @Input() page: string = ''; //sector
}
