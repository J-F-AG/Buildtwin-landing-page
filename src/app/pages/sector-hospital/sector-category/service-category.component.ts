import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hospital-sector-category',
  templateUrl: './sector-category.component.html',
  styleUrl: './sector-category.component.scss'
})
export class HospitalSectorCategoryComponent {
  @Input() category: number = 0;
  @Input() page: string = ''; //sector
}
