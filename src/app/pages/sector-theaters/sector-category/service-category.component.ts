import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-theaters-sector-category',
  templateUrl: './sector-category.component.html',
  styleUrl: './sector-category.component.scss'
})
export class TheatersSectorCategoryComponent {
  @Input() category: number = 0;
  @Input() page: string = ''; //sector
}
