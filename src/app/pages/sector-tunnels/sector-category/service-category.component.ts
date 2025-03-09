import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tunnels-sector-category',
  templateUrl: './sector-category.component.html',
  styleUrl: './sector-category.component.scss'
})
export class TunnelsPlantSectorCategoryComponent {
  @Input() category: number = 0;
  @Input() page: string = ''; //sector
}
