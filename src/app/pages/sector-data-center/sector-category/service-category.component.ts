import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-center-sector-category',
  templateUrl: './sector-category.component.html',
  styleUrl: './sector-category.component.scss'
})
export class DataCenterSectorCategoryComponent {
  @Input() category: any = '';
  @Input() page: string = ''; //sector
}
