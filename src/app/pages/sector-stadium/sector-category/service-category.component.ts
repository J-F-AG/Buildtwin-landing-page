import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stadim-sector-category',
  templateUrl: './sector-category.component.html',
  styleUrl: './sector-category.component.scss'
})
export class StadiumSectorCategoryComponent {
  @Input() category: number = 0;
  @Input() page: string = ''; //sector
}
